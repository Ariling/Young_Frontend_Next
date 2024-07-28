import { useRouter } from "next/router";
import React from "react";
import Back from "@/svg/back.svg";

const BackCompo = () => {
  // 뒤로가기 컴포 만들기
  const router = useRouter();
  return (
    <div className="flex justify-start mb-9">
      <Back onClick={() => router.back()} />
    </div>
  );
};

export default BackCompo;
