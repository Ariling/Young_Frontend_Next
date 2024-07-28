import Footer from "@/components/common/Footer";
import NicknameTitle from "@/components/utils/NicknameTitle";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import {
  DehydratedState,
  HydrationBoundary,
  QueryClient,
  dehydrate,
  useQuery,
} from "@tanstack/react-query";
import { useGetHostResult } from "@/apis/host";
import useGetImage from "@/query/get/useGetImage";
import { useUserStore } from "@/store/user";
import KakaoShareBtn from "@/components/utils/KakaoShareBtn";
import HostDeployLayout from "@/components/Layout/HostDeployLayout";
import useGetSuffixArray from "@/hooks/useGetSuffixArray";
import ProgressCompo from "@/components/utils/ProgressCompo";

const Index = ({ dehydratedState }: { dehydratedState: DehydratedState }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["host-result"],
    queryFn: useGetHostResult,
    retry: false,
  });
  const router = useRouter();
  const image = data?.data.image ?? "000";
  const divRef = useRef<HTMLDivElement>(null);
  const hostName = decodeURIComponent(router.query.name as string);
  const hostSuffixArray = useGetSuffixArray(hostName) as string[];
  const { imgUrl } = useGetImage(image);
  const resetInfo = useUserStore.use.resetInfo();
  if (error || !hostName) {
    alert("로그인을 진행해주세요");
    resetInfo();
    router.replace("/login");
  } else if (
    data &&
    (data.message === "Bad Request" || data.message === "User Not Allowed")
  ) {
    alert("잘못된 접근입니다.");
    router.back();
  }
  if (isLoading)
    return (
      <>
        <ProgressCompo />
      </>
    );
  return (
    <HydrationBoundary state={dehydratedState}>
      <>
        <main className="bg--layout">
          <div className="flex flex-col justify-center p-7 mb-20">
            <div className="flex flex-col items-center">
              <NicknameTitle>
                친구들이 생각하는 {hostName}
                {hostSuffixArray[0]}
              </NicknameTitle>
              <HostDeployLayout
                data={data}
                hostName={hostName}
                imgUrl={imgUrl}
                divRef={divRef}
              />
              <KakaoShareBtn />
            </div>
          </div>
          <Footer />
        </main>
      </>
    </HydrationBoundary>
  );
};

export default Index;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["host-result"],
    queryFn: useGetHostResult,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
