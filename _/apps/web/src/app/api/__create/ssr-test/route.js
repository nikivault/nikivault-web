import { getToken } from '@auth/core/jwt';
import React from 'react';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { renderToString } from 'react-dom/server';
import { serializeError } from 'serialize-error';
import cleanStack from 'clean-stack';

function serializeClean(err) {
	// if we want to clean this more, maybe we should look at the file where it
	// is imported and above.
	err.stack = cleanStack(err.stack, {
		pathFilter: (p) => {
			// Filter out paths that are not relevant to the error
			return !p.includes('node_modules') && !p.includes('dist') && !p.includes('__create');
		},
	});

	return serializeError(err);
}

const getHTMLOrError = (component) => {
	try {
		const html = renderToString(React.createElement(component, {}));
		return { html, error: null };
	} catch (error) {
		return { html: null, error: serializeClean(error) };
	}
};

export async function GET(request) {
	// Dynamically load the routes file from the project's src so Rollup/Vite
	// does not try to statically resolve it during SSR bundling.
	let routes = [];
	try {
		const routesPath = path.join(process.cwd(), 'src', 'app', 'routes');
		const routesModule = await import(/* @vite-ignore */ pathToFileURL(routesPath).href);
		routes = routesModule && routesModule.default ? routesModule.default : routesModule;
	} catch (err) {
		console.debug('Could not load routes module:', err);
		// continue with empty routes array
		routes = [];
	}

	const results = await Promise.allSettled(
		routes.map(async (route) => {
			let component = null;
			try {
				// Build an absolute path to the component file inside the project's src/app
				const filePath = path.join(process.cwd(), 'src', 'app', route.file);
				const response = await import(/* @vite-ignore */ pathToFileURL(filePath).href);
				component = response.default;
			} catch (error) {
				console.debug('Error importing component:', route.file, error);
			}
			if (!component) {
				return null;
			}
			return {
				route: route.file,
				path: route.path,
				...getHTMLOrError(component),
			};
		})
	);

	const cleanedResults = results
		.filter((result) => result.status === 'fulfilled')
		.map((result) => (result.status === 'fulfilled' ? result.value : null))
		.filter((result) => result !== null);

	return Response.json({ results: cleanedResults });
}
