import GuestResultLayout from "@/components/layout/GuestResultLayout";
import { useGetSuffix } from "@/hooks/useGetSuffix";
import React, { useEffect, useState } from "react";
import Footer from "@/components/layout/Footer";
import { useRouter } from "next/router";
import NicknameTitle from "@/components/utils/NicknameTitle";
import axios from "axios";
import { BASE_URL } from "@/config";
import useGetImage from "@/query/useGetImage";
import { useQuestionStore } from "@/store/question";
import GuestResultCompo from "@/components/guestResult/guestResultCompo";

export type Tdata = {
  hostId: string;
  hostName: string;
  guestName: string;
  animal: number;
  emoji: number;
  color: number;
  title: string;
  first: string;
  now: string;
};

type TProps = {
  message: string;
  data: Tdata;
};

const Index = () => {
  // 이거 CSR로 해야겠다... 너무 복잡하다 이렇게 하려니깐...
  const router = useRouter();
  const [props, setProps] = useState<TProps>({
    message: "",
    data: {
      hostId: "",
      hostName: "",
      guestName: "",
      animal: 0,
      emoji: 0,
      color: 0,
      title: "",
      first: "",
      now: "",
    },
  });
  const questionArray = useQuestionStore.getState().questionArray;
  const resetArray = useQuestionStore.use.resetQuestion();
  const { hostId, nickname: guestName } = router.query as {
    hostId: string;
    nickname: string;
  };
  useEffect(() => {
    const fetchData = async () => {
      if (questionArray.some((el) => el === 0) || !hostId || !guestName) {
        router.replace("/login");
        return;
      }
      try {
        const API_URL = `${BASE_URL}/responses`;

        const res = await axios.post(API_URL, {
          hostId: hostId,
          guestName: guestName,
          animal: questionArray[0],
          emoji: questionArray[1],
          color: questionArray[2],
          first: questionArray[3],
          now: questionArray[4],
        });
        const props = res.data;
        setProps(props);
        resetArray();
      } catch (error) {
        router.replace("/login");
      }
    };
    fetchData();
  }, []);
  const imgNum =
    String(props.data.color) +
    String(props.data.emoji) +
    String(props.data.animal);
  const { imgUrl } = useGetImage(imgNum);
  const nickname = props.data.hostName;
  return (
    <>
      <main className="bg--layout">
        <div className="flex flex-col justify-center p-7 mb-20">
          <div className="flex flex-col items-center">
            <NicknameTitle>
              내가 생각하는 {nickname}
              {useGetSuffix(nickname, 1)}?
            </NicknameTitle>
            <GuestResultLayout
              imgsrc={imgUrl}
              title={props.data.title}
              first={props.data.first}
              now={props.data.now}
            />
            <GuestResultCompo hostId={hostId} nickname={nickname} />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Index;
