import GuestResultLayout from "@/components/layout/GuestResultLayout";
import React, { useEffect } from "react";
import Footer from "@/components/common/Footer";
import NicknameTitle from "@/components/utils/NicknameTitle";
import useGetImage from "@/query/get/useGetImage";
import GuestResultCompo from "@/components/guestResult/GuestResultCompo";
import { postGuestResult } from "@/apis/guest";
import useGetGuestRoute from "@/hooks/useGetGuestRoute";
import { useQuestionStore } from "@/store/question";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import ProgressCompo from "@/components/utils/ProgressCompo";
import useGetSuffixArray from "@/hooks/useGetSuffixArray";

const Index = () => {
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
  useEffect(() => {
    if (
      questionArray.some((el) => el === 0) ||
      !hostId ||
      !guestName ||
      !data ||
      error
    ) {
      router.replace("/login");
    }
  }, [questionArray, router, hostId, guestName, data, error]);
  const imgNum = data.data
    ? String(data.data.color) +
      String(data.data.emoji) +
      String(data.data.animal)
    : "";
  const { imgUrl } = useGetImage(imgNum);
  const nickname = data.data ? data.data.hostName : "";
  if (isLoading || !data)
    return (
      <>
        <ProgressCompo />
      </>
    );
  return (
    <>
      <main className="bg--layout">
        <div className="flex flex-col justify-center p-7 mb-20">
          <div className="flex flex-col items-center">
            <NicknameTitle>
              내가 생각하는 {nickname}
              {guestSuffixArray[0]}?
            </NicknameTitle>
            {data.data && (
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

export default Index;
