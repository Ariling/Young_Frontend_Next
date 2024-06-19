import GuestResultLayout from "@/components/layout/GuestResultLayout";
import { testGuestResult } from "@/components/utils/testData";
import { useGetSuffix } from "@/hooks/useGetSuffix";
import { UtilBtn } from "@/styles/buttonStyle";
import React from "react";
import Home from "@/svg/home.svg";
import Footer from "@/components/layout/Footer";
import { useRouter } from "next/router";
import NicknameTitle from "@/components/utils/NicknameTitle";

const Index = () => {
  const router = useRouter();
  const testSrc =
    "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg";
  const nickname = "루씨";
  return (
    <>
      <main className="bg--layout">
        <div className="flex flex-col justify-center p-7">
          <div className="flex flex-col items-center">
            <NicknameTitle>
              내가 생각하는 {nickname}
              {useGetSuffix(nickname, 1)}?
            </NicknameTitle>
            <GuestResultLayout
              imgsrc={testSrc}
              title={testGuestResult.title}
              first={testGuestResult.first}
              now={testGuestResult.now}
            />
            <div>
              <div className="font-Neo text-center font-bold text-[#64422E] mt-9 text-base mb-3">
                다른 친구들이 본 {nickname}
                {useGetSuffix(nickname, 2)} 궁금하다면?
              </div>
              <UtilBtn
                isUrl={false}
                onClick={() => router.push(`/guestResult/${nickname}`)}
              >
                결과 보러 가기
              </UtilBtn>
            </div>
            <div>
              <div className="font-Neo text-center font-bold text-[#64422E] mt-[100px] text-base mb-3">
                친구가 보는 내가 궁금하다면?
              </div>
              <UtilBtn isUrl={false} onClick={() => router.push("/login")}>
                물어보러가기
                <Home />
              </UtilBtn>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Index;
