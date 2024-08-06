import { postGuestResult } from "@/apis/guest";
import useGetGuestRoute from "@/hooks/useGetGuestRoute";
import useGetSuffixArray from "@/hooks/useGetSuffixArray";
import useGetImage from "@/query/get/useGetImage";
import { useQuestionStore } from "@/store/question";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import ProgressCompo from "../utils/ProgressCompo";
import NicknameTitle from "../utils/NicknameTitle";
import GuestResultLayout from "../layout/GuestResultLayout";
import GuestResultCompo from "./GuestResultCompo";
import Footer from "../common/Footer";

const GuestResultPageCompo = () => {
  const router = useRouter();
  const questionArray = useQuestionStore.getState().questionArray;
  const { hostId, nickname: guestName } = router.query as {
    hostId: string;
    nickname: string;
  };
  const guestSuffixArray = useGetSuffixArray(guestName as string);
  const info = useGetGuestRoute();
  const { data, error, isLoading } = useQuery({
    queryKey: ["guestResult", hostId, guestName],
    queryFn: () =>
      postGuestResult(hostId as string, guestName as string, questionArray),
    enabled: !!hostId && !!guestName,
  });
  let imgNum = useRef("000");
  const { imgUrl, refetch } = useGetImage(imgNum.current);
  useEffect(() => {
    if (
      questionArray.some((el) => el === 0) ||
      !hostId ||
      !guestName ||
      !data ||
      !data.data ||
      error
    ) {
      router.replace("/login");
    } else if (data && data.data) {
      imgNum.current =
        String(data.data.color) +
        String(data.data.emoji) +
        String(data.data.animal);
      refetch();
    }
  }, [questionArray, router, hostId, guestName, data, error, refetch]);
  const nickname = data && data.data ? data.data.hostName : "";
  if (isLoading) return <ProgressCompo />;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!data || !data.data) return <div>데이터가 없습니다.</div>;
  return (
    <>
      <main className="bg--layout">
        <div className="flex flex-col justify-center p-7 mb-20">
          <div className="flex flex-col items-center">
            <NicknameTitle>
              내가 생각하는 {nickname}
              {guestSuffixArray[0]}?
            </NicknameTitle>
            {data && data.data && (
              <GuestResultLayout
                imgsrc={imgUrl}
                title={data.data.title}
                first={data.data.first}
                now={data.data.now}
              />
            )}
            <GuestResultCompo hostId={info.id} nickname={nickname} />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default GuestResultPageCompo;
