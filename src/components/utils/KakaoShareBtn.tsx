import { useUserStore } from "@/store/user";
import { UtilBtn } from "@/styles/buttonStyle";
import { useCallback } from "react";
import Copy from "@/svg/copy.svg";

declare global {
  interface Window {
    Kakao: any;
  }
}

const userInfo = useUserStore.getState().userInfo;
const KakaoShareBtn: React.FC = () => {
  const shareKakao = useCallback(() => {
    console.log(window.Kakao);
    console.log("동작은 하니?");
    if (window.Kakao) {
      window.Kakao.Share.createCustomButton({
        container: "#kakaotalk-sharing-btn",
        templateId: 102394,
        templateArgs: {
          title: "제목 영역입니다.",
          description: "설명 영역입니다.",
          host_nickname: userInfo.hostName,
          hostId: userInfo.id,
          url: `https://young-season.site/?hostId=${userInfo.id}`,
        },
      });
    }
  }, []);

  return (
    <>
      <div>
        <div className="font-Neo text-center font-bold text-[#64422E] text-base mb-3">
          친구에게 공유하고 내 이미지를 알아보세요!
        </div>
        <UtilBtn id="kakaotalk-sharing-btn" isUrl={true} onClick={shareKakao}>
          물어보러가기
          <Copy />
        </UtilBtn>
      </div>
    </>
  );
};

export default KakaoShareBtn;
