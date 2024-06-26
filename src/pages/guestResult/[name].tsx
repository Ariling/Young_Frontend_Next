import { useRouter } from "next/router";
import Back from "@/svg/back.svg";
import Home from "@/svg/home.svg";
import React from "react";
import { useGetSuffix } from "@/hooks/useGetSuffix";
import { testGuestResult } from "@/components/utils/testData";
import { UtilBtn } from "@/styles/buttonStyle";
import Footer from "@/components/layout/Footer";
import GuestResultLayout from "@/components/layout/GuestResultLayout";
import NicknameTitle from "@/components/utils/NicknameTitle";

const OtherGuestPage = () => {
  //여기서 SSR로 활용할 예정
  const router = useRouter();
  const testSrc =
    "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg";
  const otherGuestName = (router.query.name as string) || "";
  return (
    <>
      <main className="bg--layout">
        <div className="flex flex-col justify-center p-7 mb-20">
          <div className="flex justify-start mb-9">
            <Back onClick={() => router.back()} />
          </div>
          <div className="flex flex-col items-center">
            <NicknameTitle>
              다른 친구들이 생각하는 {otherGuestName}
              {useGetSuffix(otherGuestName, 1)}?
            </NicknameTitle>
            <GuestResultLayout
              imgsrc={testSrc}
              title={testGuestResult.title}
              first={testGuestResult.first}
              now={testGuestResult.now}
            />
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

export default OtherGuestPage;
