import Footer from "@/components/layout/Footer";
import NicknameTitle from "@/components/utils/NicknameTitle";
import { useGetSuffix } from "@/hooks/useGetSuffix";
import Back from "@/svg/back.svg";
import Right from "@/svg/arrow-right.svg";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { styled } from "twin.macro";

const Index = () => {
  const router = useRouter();
  const otherGuestName = (router.query.nickname as string) || "";
  const hostNickname = "지우";
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
        <div className="flex flex-col justify-center p-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-start mb-9">
            <Back onClick={() => router.back()} />
          </div>
          <div className="flex flex-col items-center">
            <NicknameTitle>
              {otherGuestName}
              {useGetSuffix(otherGuestName, 2)} 생각하는 {hostNickname}
              {useGetSuffix(hostNickname, 1)}?
            </NicknameTitle>
            <WhiteBox className=" font-Neo">
              <QNAResult result={"강아지상"}>
                <>
                  {hostNickname}
                  {useGetSuffix(hostNickname, 1)} OO상이야
                </>
              </QNAResult>
              <QNAResult result={"강아지상"}>
                <>
                  {hostNickname}
                  {useGetSuffix(hostNickname, 1)} OO상이야
                </>
              </QNAResult>
              <QNAResult result={"강아지상"}>
                <>
                  {hostNickname}
                  {useGetSuffix(hostNickname, 2)} 이모지라면
                </>
              </QNAResult>
              <QNAResult result={"강아지상"}>
                <>
                  {hostNickname}
                  {useGetSuffix(hostNickname, 3)} 어울리는 색은...
                </>
              </QNAResult>
              <QNAResult result={"강아지상"}>
                <>
                  {hostNickname}
                  {useGetSuffix(hostNickname, 4)} 처음 봤을 때...
                </>
              </QNAResult>
              <QNAResult result={"강아지상"}>
                <>
                  지금 내가 생각하는
                  {hostNickname}
                  {useGetSuffix(hostNickname, 1)}..
                </>
              </QNAResult>
            </WhiteBox>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Index;

export const WhiteBox = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-bottom: 120px;
  padding: 20px 16px;
  gap: 20px;
  border-radius: 12px;
  font-weight: 700;
`;
