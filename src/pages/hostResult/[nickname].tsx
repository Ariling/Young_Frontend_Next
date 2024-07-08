import Footer from "@/components/layout/Footer";
import NicknameTitle from "@/components/utils/NicknameTitle";
import { useGetSuffix } from "@/hooks/useGetSuffix";
import Back from "@/svg/back.svg";
import Right from "@/svg/arrow-right.svg";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { css, styled } from "twin.macro";
import { useQuery } from "@tanstack/react-query";
import { useGetHostGuestResult } from "@/apis/host";
import useGetSuffixArray from "@/hooks/useGetSuffixArray";
import {
  ColorArray,
  EmojiArray,
  FaceArray,
  firstImpressionArray,
  presentImpressionArray,
} from "@/components/utils/questionArray";

const Index = () => {
  const router = useRouter();
  const guestId = router.query.nickname as string;
  const guestName = decodeURIComponent(router.query.name as string);
  const hostNickname = decodeURIComponent(router.query.host as string) || "";
  const guestSuffixArray = useGetSuffixArray(guestName);
  const hostSuffixArray = useGetSuffixArray(hostNickname);
  const { data } = useQuery({
    queryKey: ["host-guest-result", guestId],
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
                  <QNAResult result={FaceArray[data.data.animal - 1]}>
                    <>
                      {hostNickname}
                      {hostSuffixArray[0]} OO상이야
                    </>
                  </QNAResult>
                  <QNAResult result={EmojiArray[data.data.emoji - 1]}>
                    <>
                      {hostNickname}
                      {hostSuffixArray[1]} 이모지라면
                    </>
                  </QNAResult>
                  <QNAResult result={ColorArray[data.data.color - 1]}>
                    <>
                      {hostNickname}
                      {hostSuffixArray[2]} 어울리는 색은...
                    </>
                  </QNAResult>
                  <QNAResult result={firstImpressionArray[data.data.first - 1]}>
                    <>
                      {hostNickname}
                      {hostSuffixArray[3]} 처음 봤을 때...
                    </>
                  </QNAResult>
                  <QNAResult result={presentImpressionArray[data.data.now - 1]}>
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
  );
};

export default Index;

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
