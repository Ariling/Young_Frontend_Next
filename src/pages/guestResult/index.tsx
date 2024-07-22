import GuestResultLayout from "@/components/Layout/GuestResultLayout";
import { useGetSuffix } from "@/hooks/useGetSuffix";
import React, { useEffect, useState } from "react";
import Footer from "@/components/common/Footer";
import NicknameTitle from "@/components/utils/NicknameTitle";
import useGetImage from "@/query/get/useGetImage";
import GuestResultCompo from "@/components/guestResult/GuestResultCompo";
import { TProps } from "@/types/THost";
import { postGuestResult } from "@/apis/guest";
import useGetGuestRoute from "@/hooks/useGetGuestRoute";
import { useQuestionStore } from "@/store/question";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const questionArray = useQuestionStore.getState().questionArray;
  const { hostId, nickname: guestName } = router.query as {
    hostId: string;
    nickname: string;
  };
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
  const info = useGetGuestRoute();
  useEffect(() => {
    if (questionArray.some((el) => el === 0) || !hostId || !guestName) {
      router.replace("/login");
      return;
    }

    const fetchData = async () => {
      try {
        const data = await postGuestResult(hostId, guestName, questionArray);
        if (data) {
          setProps(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [questionArray, router, postGuestResult]);
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
            <GuestResultCompo hostId={info.id} nickname={nickname} />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Index;
