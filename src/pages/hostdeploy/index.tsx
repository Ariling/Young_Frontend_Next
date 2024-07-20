import Footer from "@/components/layout/Footer";
import GuestResultLayout from "@/components/layout/GuestResultLayout";
import GuestImage from "@/components/utils/GuestImage";
import NicknameTitle from "@/components/utils/NicknameTitle";
import { useGetSuffix } from "@/hooks/useGetSuffix";
import { UtilBtn } from "@/styles/buttonStyle";
import { useRouter } from "next/router";
import Copy from "@/svg/copy.svg";
import Download from "@/svg/download.svg";
import Report from "@/svg/report-icon.svg";
import React, { useCallback, useRef, useState } from "react";
import {
  DehydratedState,
  HydrationBoundary,
  QueryClient,
  dehydrate,
  useQuery,
} from "@tanstack/react-query";
import { useGetHostResult } from "@/apis/host";
import useGetImage from "@/query/get/useGetImage";
import HostPagination from "@/components/HostResult/HostPagination";
import { useUserStore } from "@/store/user";
import html2canvas from "html2canvas";
import saveAs from "file-saver";

const Index = ({ dehydratedState }: { dehydratedState: DehydratedState }) => {
  const { data, error } = useQuery({
    queryKey: ["host-result"],
    queryFn: useGetHostResult,
    retry: false,
  });
  const router = useRouter();
  // 일단 되는지 테스트..
  const image = data?.data.image ?? "000";
  const hostName = decodeURIComponent(router.query.name as string);
  const { imgUrl } = useGetImage(image);
  const resetInfo = useUserStore.use.resetInfo();
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
  }
  const divRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!divRef.current) return;

    try {
      const canvas = await html2canvas(divRef.current, { scale: 2 });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, "result.png");
        }
      });
    } catch (error) {
      console.error("Error converting div to image:", error);
    }
  };
  return (
    <HydrationBoundary state={dehydratedState}>
      <>
        <main className="bg--layout">
          <div className="flex flex-col justify-center p-7 mb-20">
            <div className="flex flex-col items-center">
              <NicknameTitle>
                친구들이 생각하는 {hostName}
                {useGetSuffix(hostName, 1)}
              </NicknameTitle>
              {
                // undefined, null, 0, false등을 falsy 값이 아님을 나타내는 방법
                data &&
                data.data &&
                data.data.title &&
                data.data.first &&
                data.data.now ? (
                  <>
                    <GuestResultLayout
                      imgsrc={imgUrl}
                      title={data.data.title}
                      first={data.data.first}
                      now={data.data.now}
                      ref={divRef}
                    />
                    <div className="mt-4 flex flex-col gap-5 mb-28">
                      <UtilBtn isUrl={false} onClick={handleDownload}>
                        이미지 다운로드
                        <Download />
                      </UtilBtn>
                      <UtilBtn
                        isUrl={false}
                        onClick={() =>
                          router.push(
                            `/hostdeploy/hostStatistic?name=${hostName}`
                          )
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
                    <div>
                      <div className="font-Neo text-center font-bold text-[#64422E] text-base mb-3">
                        친구에게 공유하고 내 이미지를 알아보세요!
                      </div>
                      <UtilBtn
                        isUrl={true}
                        onClick={() => router.push("/login")}
                      >
                        물어보러가기
                        <Copy />
                      </UtilBtn>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mt-3 mb-[60px]">
                      <GuestImage src={imgUrl} />
                    </div>
                    <div>
                      <div className="font-Neo text-center font-bold text-[#64422E] text-base mb-3">
                        친구에게 공유하고 내 이미지를 알아보세요!
                      </div>
                      <UtilBtn
                        isUrl={true}
                        onClick={() => router.push("/login")}
                      >
                        물어보러가기
                        <Copy />
                      </UtilBtn>
                    </div>
                  </>
                )
              }
            </div>
          </div>
          <Footer />
        </main>
      </>
    </HydrationBoundary>
  );
};

export default Index;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["host-result"],
    queryFn: useGetHostResult,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
