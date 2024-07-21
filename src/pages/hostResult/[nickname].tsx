import Footer from "@/components/layout/Footer";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useGetHostGuestResult } from "@/apis/host";
import useGetSuffixArray from "@/hooks/useGetSuffixArray";
import {
  ColorArray,
  EmojiArray,
  FaceArray,
  firstImpressionArray,
  presentImpressionArray,
} from "@/constants/questionArray";
import { useUserStore } from "@/store/user";
import HostResultForm from "@/components/HostResult/HostResultForm";
import BackCompo from "@/components/utils/BackCompo";

const Index = () => {
  const router = useRouter();
  const guestId = router.query.nickname as string;
  const guestName = decodeURIComponent(router.query.name as string);
  const hostNickname = decodeURIComponent(router.query.host as string) || "";
  const hostSuffixArray = useGetSuffixArray(hostNickname) as string[];
  const resetInfo = useUserStore.use.resetInfo();
  let resultArray: Array<string> = [];
  const { data, error } = useQuery({
    queryKey: ["host-guest-result", guestId],
    queryFn: useGetHostGuestResult,
  });
  if (error) {
    alert("로그인을 진행해주세요");
    resetInfo();
    router.replace("/login");
  } else if (
    data &&
    (data.message === "Bad Request" || data.message === "User Not Allowed")
  ) {
    alert("잘못된 접근입니다.");
    router.back();
  } else if (data && data.message === "Guest Result") {
    resultArray = [
      FaceArray[data.data.animal - 1],
      EmojiArray[data.data.emoji - 1],
      ColorArray[data.data.color - 1],
      firstImpressionArray[data.data.first - 1],
      presentImpressionArray[data.data.now - 1],
    ];
  }
  return (
    <>
      <main className="bg--layout">
        <div className="flex flex-col justify-center p-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-20">
          <BackCompo />
          {data && data.data ? (
            <>
              <div className="flex flex-col items-center">
                <HostResultForm
                  guestName={guestName}
                  hostNickname={hostNickname}
                  hostSuffixArray={hostSuffixArray}
                  resultArray={resultArray}
                />
              </div>
            </>
          ) : null}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Index;
