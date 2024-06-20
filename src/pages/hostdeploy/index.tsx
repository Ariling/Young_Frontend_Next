import Footer from "@/components/layout/Footer";
import GuestResultLayout from "@/components/layout/GuestResultLayout";
import GuestImage from "@/components/utils/GuestImage";
import NicknameTitle from "@/components/utils/NicknameTitle";
import { testHostResult } from "@/components/utils/testData";
import { useGetSuffix } from "@/hooks/useGetSuffix";
import { useHostResultStore } from "@/store/hostresult";
import { UtilBtn } from "@/styles/buttonStyle";
import { useRouter } from "next/router";
import Home from "@/svg/home.svg";
import React, { useEffect, useState } from "react";
import { WhiteBox } from "../hostResult/[nickname]";
import { styled } from "twin.macro";

const Index = () => {
  const data = useHostResultStore.use.data();
  const setData = useHostResultStore.use.setData();
  const router = useRouter();
  const testSrc =
    "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg";
  const hostName = "루씨";
  useEffect(() => {
    // 한번 있을 때와 없을 때의 테스트를 위해 존재하는 코드
    setData(testHostResult);
  }, []);
  // 일단 되는지 테스트..
  const [visibleGuests, setVisibleGuests] = useState(6);
  return (
    <>
      <main className="bg--layout">
        <div className="flex flex-col justify-center p-7 mb-20">
          <div className="flex flex-col items-center">
            <NicknameTitle>
              친구들이 생각하는 {hostName}
              {useGetSuffix(hostName, 1)}
            </NicknameTitle>
            {data.image !== "000" &&
            // undefined, null, 0, false등을 falsy 값이 아님을 나타내는 방법
            data.title &&
            data.first &&
            data.now &&
            data.guests ? (
              <>
                <GuestResultLayout
                  imgsrc={testSrc}
                  title={data.title}
                  first={data.first}
                  now={data.now}
                />
                <div className="mt-4 flex flex-col gap-5 mb-28">
                  <UtilBtn isUrl={false} onClick={() => router.push("/login")}>
                    이미지 다운로드
                    <Home />
                  </UtilBtn>
                  <UtilBtn isUrl={false} onClick={() => router.push("/login")}>
                    질문별 통계 보러가기
                    <Home />
                  </UtilBtn>
                </div>
                <div>
                  <div className=" text-2xl font-bold font-Neo text-[#64422E] mb-12">
                    방문자 목록
                  </div>
                  <WhiteBox isStatistic className="mb-4">
                    <TableHeaderContainer>
                      <NicknameBox>
                        <HeaderText>닉네임</HeaderText>
                      </NicknameBox>
                      <AnswerBox>
                        <HeaderText>답변</HeaderText>
                      </AnswerBox>
                    </TableHeaderContainer>
                    {data.guests
                      .reverse()
                      .slice(0, visibleGuests)
                      .map((guest) => (
                        <TableListContainer key={guest!.id}>
                          <NicknameBox>
                            <ListText>{guest.name}</ListText>
                          </NicknameBox>
                          <AnswerBox>
                            <ListText>
                              <Home
                                onClick={() =>
                                  router.push(`/hostResult/${guest.name}`)
                                }
                              />
                            </ListText>
                          </AnswerBox>
                        </TableListContainer>
                      ))}
                  </WhiteBox>
                </div>
                <div>
                  <div className="font-Neo text-center font-bold text-[#64422E] text-base mb-3">
                    친구에게 공유하고 내 이미지를 알아보세요!
                  </div>
                  <UtilBtn isUrl={true} onClick={() => router.push("/login")}>
                    물어보러가기
                    <Home />
                  </UtilBtn>
                </div>
              </>
            ) : (
              <>
                <div className="mt-3 mb-[60px]">
                  <GuestImage src={testSrc} />
                </div>
                <div>
                  <div className="font-Neo text-center font-bold text-[#64422E] text-base mb-3">
                    친구에게 공유하고 내 이미지를 알아보세요!
                  </div>
                  <UtilBtn isUrl={true} onClick={() => router.push("/login")}>
                    물어보러가기
                    <Home />
                  </UtilBtn>
                </div>
              </>
            )}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Index;

const TableHeaderContainer = styled.div`
  display: flex;
  padding: 0.625rem 0rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid #000;
  width: 100%;
  height: 2.5rem;
`;

const NicknameBox = styled.div`
  display: flex;
  padding-left: 1.25rem;
  align-items: center;
  gap: 0.625rem;
  flex: 1 0 0;
`;

const AnswerBox = styled.div`
  display: flex;
  padding: 0rem 1.875rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;

const HeaderText = styled.div`
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const TableListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  width: 100%;
  height: 1.125rem;
  gap: 1rem;
`;

const ListText = styled.div`
  color: var(--BLACK, #1c1c1c);
  font-family: "Spoqa Han Sans Neo";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
