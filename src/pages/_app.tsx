import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const kakaoScript = document.createElement("script");
    kakaoScript.src = "https://developers.kakao.com/sdk/js/kakao.js";
    kakaoScript.async = true;
    document.head.appendChild(kakaoScript);

    kakaoScript.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
      }
    };

    return () => {
      document.head.removeChild(kakaoScript);
    };
  }, []);
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // 브라우저에 포커스가 들어온 경우
            refetchOnWindowFocus: false,
            // 네트워크가 끊어졌다가 다시 연결된 경우
            refetchOnReconnect: false,
            // 새로 마운트 된 경우
            refetchOnMount: false,
            //10분동안은 캐시된 결과를 사용
            staleTime: 1000 * 60 * 10,
            //실패 요청해도 비활성화
            retry: 0,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
