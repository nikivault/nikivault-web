import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const metadata = {
  title: "Niki (@nikivault) - Fashion, Beauty & Travel Creator",
  description:
    "Hey, I'm Niki! I create short-form videos that inspire and inform, from fashion styling and makeup reviews to travel diaries. Let's collaborate!",
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style jsx global>{`
          @tailwind base;
          @tailwind components;
          @tailwind utilities;

          :root {
            --font-poppins: 'Poppins', sans-serif;
            --gradient-purple-lilac: linear-gradient(135deg, #8B5CF6 0%, #D8B4FE 100%);
            --gradient-soft-purple: linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%);
          }

          * {
            box-sizing: border-box;
          }

          body {
            font-family: var(--font-poppins);
            margin: 0;
            padding: 0;
          }

          html {
            scroll-behavior: smooth;
          }

          *:focus-visible {
            outline: 2px solid #8B5CF6;
            outline-offset: 2px;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes bounce {
            0%, 20%, 53%, 80%, 100% {
              transform: translate3d(0,0,0);
            }
            40%, 43% {
              transform: translate3d(0,-8px,0);
            }
            70% {
              transform: translate3d(0,-4px,0);
            }
            90% {
              transform: translate3d(0,-2px,0);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out;
          }

          .animate-bounce-soft {
            animation: bounce 1s ease-in-out infinite;
          }

          .gradient-text {
            background: var(--gradient-purple-lilac);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        `}</style>
      </head>
      <body className="font-poppins antialiased">
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
