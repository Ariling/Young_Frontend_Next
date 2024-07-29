import React from "react";
import { useGetSuffix } from "@/hooks/useGetSuffix";
import Footer from "@/components/common/Footer";
import GuestResultLayout from "@/components/layout/GuestResultLayout";
import NicknameTitle from "@/components/utils/NicknameTitle";
import { GetServerSideProps } from "next";
import { TguestResult } from "@/types/Tguest";
import { BASE_URL } from "@/config";
import axios from "axios";
import useGetImage from "@/query/get/useGetImage";
import ShareBtnCompo from "@/components/guestResult/ShareBtnCompo";
import BackCompo from "@/components/utils/BackCompo";

interface IProps {
  props: TguestResult;
}

const OtherGuestPage = ({ props }: IProps) => {
  const imageCode = props.data.image;
  const { imgUrl } = useGetImage(imageCode);
  const nickname = props.hostName;
  return (
    <>
      <main className="bg--layout">
        <div className="flex flex-col justify-center p-7 mb-20">
          <BackCompo />
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
  if (!context.params) {
    alert("접근이 허용되지 않은 방식입니다");
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const hostId = context.params.name;
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
