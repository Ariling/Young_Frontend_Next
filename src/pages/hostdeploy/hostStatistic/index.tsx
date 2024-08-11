import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Footer from "@/components/common/Footer";
import NicknameTitle from "@/components/utils/NicknameTitle";
import { WhiteBox } from "@/styles/hostStyle";
import { Istatistics } from "@/types/THost";
import {
  DehydratedState,
  HydrationBoundary,
  QueryClient,
  dehydrate,
  useQuery,
} from "@tanstack/react-query";
import { useGetStatistic } from "@/apis/host";
import useGetSuffixArray from "@/hooks/useGetSuffixArray";
import { useUserStore } from "@/store/user";
import StatisticForm from "@/components/HostStatistic/StatisticForm";
import BackCompo from "@/components/utils/BackCompo";
import ProgressCompo from "@/components/utils/ProgressCompo";
import { AxiosError } from "axios";

const Index = ({ dehydratedState }: { dehydratedState: DehydratedState }) => {
  const resetInfo = useUserStore.use.resetInfo();
  const router = useRouter();
  const hostNickname = decodeURIComponent(router.query.name as string);
  const [statisticData, setStatisticData] = useState<Istatistics | null>(null);
  const hostSuffixArray = useGetSuffixArray(hostNickname) as string[];
  const { data, error, isLoading } = useQuery({
    queryKey: ["host-stats"],
    queryFn: useGetStatistic,
  });
  if (
    !hostNickname ||
    (error && (error as AxiosError).response?.status === 401)
  ) {
    alert("로그인을 진행해주세요");
    resetInfo();
    router.replace("/login");
  } else if (error && (error as AxiosError).response?.status === 403) {
    alert("잘못된 접근입니다");
    router.back();
  }
  useEffect(() => {
    if (data && data.data) {
      setStatisticData(data.data);
    } else if (error) {
      console.log(error);
    }
  }, [data]);
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
            <BackCompo />
            <div className="flex flex-col items-center">
              <NicknameTitle>질문별 통계</NicknameTitle>
              {!statisticData && statisticData === null ? null : (
                <WhiteBox className=" font-Neo" isStatistic>
                  <StatisticForm
                    data={statisticData}
                    hostNickname={hostNickname}
                    hostSuffixArray={hostSuffixArray}
                  />
                </WhiteBox>
              )}
            </div>
            <div className=" mb-24 text-sm text-[#a4a4a4] font-medium justify-end px-4 flex ">
              *항목별 상위 2개의 통계가 표시됩니다
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
    queryKey: ["host-stats"],
    queryFn: useGetStatistic,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
