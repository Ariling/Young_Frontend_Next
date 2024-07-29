import React from "react";
import HostPagination from "./HostPagination";
import { UtilBtn } from "@/styles/buttonStyle";
import { useRouter } from "next/router";
import ImgDownloadBtn from "./ImgDownloadBtn";
import Report from "@/svg/report-icon.svg";
import { IHostDeploy } from "@/types/THost";
import GuestResultLayout from "@/components/layout/GuestResultLayout";

const HostDeployForm = (prop: IHostDeploy) => {
  const router = useRouter();
  return (
    <>
      <GuestResultLayout
        imgsrc={prop.imgUrl}
        title={prop.data.data.title}
        first={prop.data.data.first}
        now={prop.data.data.now}
        ref={prop.divRef}
      />
      <div className="mt-4 flex flex-col gap-5 mb-28">
        <ImgDownloadBtn divRef={prop.divRef} />
        <UtilBtn
          isUrl={false}
          onClick={() =>
            router.push(`/hostdeploy/hostStatistic?name=${prop.hostName}`)
          }
        >
          질문별 통계 보러가기
          <Report />
        </UtilBtn>
      </div>
      <div>
        <div className=" text-2xl font-bold font-Neo text-[#64422E] mb-12">
          방문자 목록
        </div>
        <HostPagination />
      </div>
    </>
  );
};

export default HostDeployForm;
