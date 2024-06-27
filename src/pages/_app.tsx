import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        //10분동안은 캐시된 결과를 사용
        staleTime: 1000 * 60 * 3,
        //실패 요청해도 비활성화
        retry: 0,
      },
    },
  });
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </SessionProvider>
  );
}
