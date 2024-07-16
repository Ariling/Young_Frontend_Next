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
import { GetServerSideProps } from "next";
import { TguestResult } from "@/types/Tguest";
import { BASE_URL } from "@/config";
import axios from "axios";
import useGetImage from "@/query/get/useGetImage";
import ShareBtnCompo from "@/components/guestResult/ShareBtnCompo";

interface IProps {
  props: TguestResult;
}

const OtherGuestPage = ({ props }: IProps) => {
  //여기서 SSR로 활용할 예정
  const router = useRouter();
  const imageCode = props.data.image;
  const { imgUrl } = useGetImage(imageCode);
  const nickname = props.hostName;
  return (
    <>
      <main className="bg--layout">
        <div className="flex flex-col justify-center p-7 mb-20">
          <div className="flex justify-start mb-9">
            <Back onClick={() => router.back()} />
          </div>
          <div className="flex flex-col items-center">
            <NicknameTitle>
              다른 친구들이 생각하는 {nickname}
              {useGetSuffix(nickname, 1)}?
            </NicknameTitle>
            <GuestResultLayout
              imgsrc={imgUrl}
              title={props.data.title}
              first={props.data.first}
              now={props.data.now}
            />
            <ShareBtnCompo />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default OtherGuestPage;

export const getServerSideProps: GetServerSideProps<{
  props: TguestResult;
}> = async (context) => {
  const hostId = context.params?.name as string;

  try {
    const API_URL = `${BASE_URL}/results/${hostId}`;

    const res = await axios.get(API_URL);
    const props = res.data;
    return {
      props: {
        props,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};