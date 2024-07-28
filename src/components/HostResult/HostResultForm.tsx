import useGetResultTitleArray from "@/hooks/useGetResultTitleArray";
import React from "react";
import QNAResult from "./QNAResult";
import { WhiteBox } from "@/styles/hostStyle";
import useGetSuffixArray from "@/hooks/useGetSuffixArray";
import NicknameTitle from "../utils/NicknameTitle";

interface IProps {
  hostNickname: string;
  guestName: string;
  hostSuffixArray: string[];
  resultArray: string[];
}

const HostResultForm = (props: IProps) => {
  const questionArray = useGetResultTitleArray(
    props.hostNickname,
    props.hostSuffixArray
  );
  const guestSuffixArray = useGetSuffixArray(props.guestName);
  return (
    <>
      <NicknameTitle>
        {props.guestName}
        {guestSuffixArray[1]} 생각하는 {props.hostNickname}
        {props.hostSuffixArray[0]}?
      </NicknameTitle>
      <WhiteBox className=" font-Neo" isStatistic={false}>
        {props.resultArray.map((e, i) => {
          return (
            <>
              <QNAResult key={i} result={e}>
                <>{questionArray[i]}</>
              </QNAResult>
            </>
          );
        })}
      </WhiteBox>
    </>
  );
};

export default HostResultForm;
