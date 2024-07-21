import { useUserStore } from "@/store/user";
import { UtilBtn } from "@/styles/buttonStyle";
import { useEffect, useState } from "react";
import Copy from "@/svg/copy.svg";

declare global {
  interface Window {
    Kakao: any;
  }
}

const KakaoShareBtn = () => {
  const [isKakaoInitialized, setIsKakaoInitialized] = useState(false);
  const userInfo = useUserStore.getState().userInfo;
  useEffect(() => {
    // Kakao SDK 스크립트 로드
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    script.onload = () => {
      if (window.Kakao) {
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
        }
        setIsKakaoInitialized(true);
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (isKakaoInitialized) {
      shareKaKao();
    }
  }, [isKakaoInitialized, userInfo.id, userInfo.hostName]);

  const shareKaKao = () => {
    if (window.Kakao) {
      window.Kakao.Share.createCustomButton({
        container: "#kakaotalk-sharing-btn",
        templateId: 102394,
        templateArgs: {
          title: "제목 영역입니다.",
          description: "설명 영역입니다.",
          host_nickname: userInfo.hostName,
          hostId: userInfo.id,
          url: `http://localhost:3000?hostId=${userInfo.id}`,
        },
      });
    }
  };

  return (
    <>
      <div>
        <div className="font-Neo text-center font-bold text-[#64422E] text-base mb-3">
          친구에게 공유하고 내 이미지를 알아보세요!
        </div>
        <UtilBtn id="kakaotalk-sharing-btn" isUrl={true} onClick={shareKaKao}>
          물어보러가기
          <Copy />
        </UtilBtn>
      </div>
    </>
  );
};

export default KakaoShareBtn;
