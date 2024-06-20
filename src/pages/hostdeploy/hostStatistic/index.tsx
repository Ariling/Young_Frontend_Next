import React, { ReactNode, useEffect, useState } from "react";
import Back from "@/svg/back.svg";
import { useRouter } from "next/router";
import Footer from "@/components/layout/Footer";
import NicknameTitle from "@/components/utils/NicknameTitle";
import { WhiteBox } from "@/pages/hostResult/[nickname]";
import { useGetSuffix } from "@/hooks/useGetSuffix";
import { Istatistics, Tstatistic } from "@/types/Tstatistic";
import { css, styled } from "twin.macro";
import {
  ColorArray,
  EmojiArray,
  FaceArray,
  firstImpressionArray,
  presentImpressionArray,
} from "@/components/utils/questionArray";

const Index = () => {
  const router = useRouter();
  const hostNickname = "지우";
  //이건 현재 테스트이기 때문에..
  const [testData, setTestData] = useState<Istatistics | null>(null);
  const nameData = [
    useGetSuffix("지우", 1),
    useGetSuffix("지우", 2),
    useGetSuffix("지우", 3),
    useGetSuffix("지우", 4),
  ];
  const QNAResult = ({
    children,
    result,
    titleArray,
  }: {
    children: ReactNode;
    result: Array<Tstatistic>;
    titleArray: Array<string>;
  }) => {
    return (
      <div className="mb-7">
        <div className=" text-base text-[#1c1c1c] mb-3">{children}</div>
        {result.map((e) => {
          return (
            <>
              <div className="mb-2" key={e.index}>
                <div className="flex text-sm gap-3">
                  <div className=" w-16">
                    {e.index - 1 === -1 ? null : titleArray[e.index - 1]}
                  </div>
                  <PercentageBarContainer>
                    <PercentageBar width={e.percent} />
                  </PercentageBarContainer>
                  <PercentageTextBox>
                    <div className=" font-Neo text-sm">{e.percent}%</div>
                  </PercentageTextBox>
                </div>
              </div>
            </>
          );
        })}
      </div>
    );
  };
  // 이것도 현재는 그냥 테스트
  useEffect(() => {
    setTestData({
      animal: [
        {
          index: 2,
          percent: 50,
        },
        {
          index: 3,
          percent: 50,
        },
      ],
      emoji: [
        {
          index: 3,
          percent: 100,
        },
        {
          index: 0,
          percent: 0,
        },
      ],
      color: [
        {
          index: 1,
          percent: 50,
        },
        {
          index: 2,
          percent: 50,
        },
      ],
      first: [
        {
          index: 1,
          percent: 30,
        },
        {
          index: 2,
          percent: 70,
        },
      ],
      now: [
        {
          index: 1,
          percent: 50,
        },
        {
          index: 7,
          percent: 50,
        },
      ],
    });
  }, []);
  return (
    <>
      <main className="bg--layout">
        <div className="flex flex-col justify-center p-7 ">
          <div className="flex justify-start mb-9">
            <Back onClick={() => router.back()} />
          </div>
          <div className="flex flex-col items-center">
            <NicknameTitle>질문별 통계</NicknameTitle>
            {testData === null ? null : (
              <WhiteBox className=" font-Neo" isStatistic>
                <QNAResult result={testData!.animal} titleArray={FaceArray}>
                  <>
                    {hostNickname}
                    {nameData[0]} OO상이야
                  </>
                </QNAResult>
                <QNAResult result={testData!.emoji} titleArray={EmojiArray}>
                  <>
                    {hostNickname}
                    {nameData[1]} 이모지라면
                  </>
                </QNAResult>
                <QNAResult result={testData!.color} titleArray={ColorArray}>
                  <>
                    {hostNickname}
                    {nameData[2]} 어울리는 색은...
                  </>
                </QNAResult>
                <QNAResult
                  result={testData!.first}
                  titleArray={firstImpressionArray}
                >
                  <>
                    {hostNickname}
                    {nameData[3]} 처음 봤을 때...
                  </>
                </QNAResult>
                <QNAResult
                  result={testData!.now}
                  titleArray={presentImpressionArray}
                >
                  <>
                    지금 내가 생각하는
                    {hostNickname}
                    {nameData[0]}..
                  </>
                </QNAResult>
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
  );
};

export default Index;

const PercentageBarContainer = styled.div`
  display: flex;
  padding: 0.375rem;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.625rem;
  flex: 1 0 0;
  border-radius: 0.625rem;
  background: var(--Light-Light-Gray, #e8e8e8);
`;

const PercentageBar = styled.div(({ width }: { width: number }) => [
  css`
    height: 0.75rem;
    align-self: stretch;
    border-radius: 0.375rem;
    background: var(--Brown, #64422e);
    width: ${width}%;
  `,
]);

const PercentageTextBox = styled.div`
  display: flex;
  width: 2.75rem;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
`;
