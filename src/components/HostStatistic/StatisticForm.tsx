import { WhiteBox } from "@/styles/hostStyle";
import { Istatistics } from "@/types/THost";
import React from "react";
import StatisticResult from "./StatisticResult";
import {
  ColorArray,
  EmojiArray,
  FaceArray,
  firstImpressionArray,
  presentImpressionArray,
} from "@/constants/questionArray";
import useGetResultTitleArray from "@/hooks/useGetResultTitleArray";

const StatisticForm = ({
  data,
  hostNickname,
  hostSuffixArray,
}: {
  data: Istatistics;
  hostNickname: string;
  hostSuffixArray: string[];
}) => {
  const array = [data.animal, data.emoji, data.color, data.first, data.now];
  const titleArray = [
    FaceArray,
    EmojiArray,
    ColorArray,
    firstImpressionArray,
    presentImpressionArray,
  ];
  const questionArray = useGetResultTitleArray(hostNickname, hostSuffixArray);
  return (
    <WhiteBox className=" font-Neo" isStatistic>
      {array.map((e, i) => {
        return (
          <>
            <StatisticResult key={i} result={e} titleArray={titleArray[i]}>
              <>{questionArray[i]}</>
            </StatisticResult>
          </>
        );
      })}
    </WhiteBox>
  );
};

export default StatisticForm;
