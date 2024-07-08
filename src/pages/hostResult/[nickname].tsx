import Footer from "@/components/layout/Footer";
import NicknameTitle from "@/components/utils/NicknameTitle";
import { useGetSuffix } from "@/hooks/useGetSuffix";
import Back from "@/svg/back.svg";
import Right from "@/svg/arrow-right.svg";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { css, styled } from "twin.macro";
import {
  DehydratedState,
  HydrationBoundary,
  QueryClient,
  dehydrate,
  useQuery,
} from "@tanstack/react-query";
import { useGetHostGuestResult, useGetHostResult } from "@/apis/host";
import useGetSuffixArray from "@/hooks/useGetSuffixArray";

const Index = ({ dehydratedState }: { dehydratedState: DehydratedState }) => {
  const router = useRouter();
  const guestName = decodeURIComponent(router.query.name as string);
  const hostNickname = decodeURIComponent(router.query.host as string) || "";
  const guestSuffixArray = useGetSuffixArray(guestName);
  const hostSuffixArray = useGetSuffixArray(hostNickname);
  const { data } = useQuery({
    queryKey: ["host-result", guestName],
    queryFn: useGetHostGuestResult,
  });
  const QNAResult = ({
    children,
    result,
  }: {
    children: ReactNode;
    result: string;
  }) => {
    return (
      <div>
        <div className=" text-base text-[#1c1c1c] mb-3">{children}</div>
        <div className="flex text-sm text-[#64422e] ml-2 gap-2">
          <Right />
          {result}
        </div>
      </div>
    );
  };
  return (
    <HydrationBoundary state={dehydratedState}>
      <>
        <main className="bg--layout">
          <div className="flex flex-col justify-center p-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-20">
            <div className="flex justify-start mb-9">
              <Back onClick={() => router.back()} />
            </div>
            {data && data.data ? (
              <>
                <div className="flex flex-col items-center">
                  <NicknameTitle>
                    {guestName}
                    {guestSuffixArray[1]} 생각하는 {hostNickname}
                    {hostSuffixArray[0]}?
                  </NicknameTitle>
                  <WhiteBox className=" font-Neo" isStatistic={false}>
                    <QNAResult result={"강아지상"}>
                      <>
                        {hostNickname}
                        {hostSuffixArray[0]} OO상이야
                      </>
                    </QNAResult>
                    <QNAResult result={"강아지상"}>
                      <>
                        {hostNickname}
                        {hostSuffixArray[1]} 이모지라면
                      </>
                    </QNAResult>
                    <QNAResult result={"강아지상"}>
                      <>
                        {hostNickname}
                        {hostSuffixArray[2]} 어울리는 색은...
                      </>
                    </QNAResult>
                    <QNAResult result={"강아지상"}>
                      <>
                        {hostNickname}
                        {hostSuffixArray[3]} 처음 봤을 때...
                      </>
                    </QNAResult>
                    <QNAResult result={"강아지상"}>
                      <>
                        지금 내가 생각하는
                        {hostNickname}
                        {hostSuffixArray[0]}..
                      </>
                    </QNAResult>
                  </WhiteBox>
                </div>
              </>
            ) : null}
          </div>
          <Footer />
        </main>
      </>
    </HydrationBoundary>
  );
};

export default Index;

export async function getStaticProps({ guestName }: { guestName: string }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["host-result", guestName],
    queryFn: useGetHostGuestResult,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export const WhiteBox = styled.div(
  ({ isStatistic }: { isStatistic: boolean }) => [
    css`
      position: relative;
      width: 320px;
      min-height: 360px;
      display: flex;
      flex-direction: column;
      background-color: white;
      padding: 20px 16px;
      gap: 20px;
      border-radius: 12px;
      font-weight: 700;
    `,
    isStatistic
      ? css`
          margin-bottom: 20px;
        `
      : css`
          margin-bottom: 120px;
        `,
  ]
);
