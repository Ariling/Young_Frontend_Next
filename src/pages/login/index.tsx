import Image from "next/image";
import React, { useEffect } from "react";
import BG from "@/images/BG.png";
import KakaoBtn from "@/components/utils/KakaoBtn";
import { useUserStore } from "@/store/user";
import { useRouter } from "next/router";

const Index = () => {
  const userInfo = useUserStore.use.userInfo();
  const router = useRouter();
  useEffect(() => {
    if (userInfo.token !== "") {
      router.replace(`/hostdeploy?name=${userInfo.hostName}`);
    }
  }, []);
  return (
    <main
      className={`flex flex-col items-center justify-center p-7 w-full min-h-screen`}
    >
      <Image src={BG} alt="백그라운드 사진" className="img--layout" priority />
      <div className="font-PartialSans text-[32px] z-10 text-center text-[#64422E] mb-10">
        친구들이 생각하는 나는?
      </div>
      <KakaoBtn />
    </main>
  );
};

export default Index;
