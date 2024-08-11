import { getNicknameCheck } from "@/apis/guest";
import { postSignup } from "@/apis/host";
import { useUserStore } from "@/store/user";
import { inputReducer } from "@/types/Treducer";
import { useRouter } from "next/router";
import React, { useReducer } from "react";
import { styled } from "twin.macro";

const NicknameInput = ({ hostName }: { hostName: string }) => {
  const [data, dispatch] = useReducer(inputReducer, "");
  const onChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE", payload: e.target.value });
  };
  const route = useRouter();
  const onClick = async () => {
    if (route.pathname === "/") {
      let id: string | null = null;
      if (typeof window !== "undefined") {
        id = new URL(window.location.href).searchParams.get("hostId");
      }
      try {
        const result = await getNicknameCheck({
          hostId: id as string,
          guestName: data,
        });
        if (result) {
          route.replace(
            `/guestQuestion?hostId=${id}&nickname=${data}&hostname=${hostName}`
          );
        }
        dispatch({ type: "RESET" });
      } catch (error) {
        alert("닉네임이 중복됩니다");
        dispatch({ type: "RESET" });
      }
    } else {
      let id: string | null = null;
      if (typeof window !== "undefined") {
        id = new URL(window.location.href).searchParams.get("id");
      }
      try {
        const result = await postSignup({
          id: id as string,
          name: data,
        });
        if (result) {
          const setInfo = useUserStore.use.setInfo();
          setInfo({
            id: result.data.data.id,
            hostName: result.data.data.name,
            token: result.data.data.token,
          });
          route.replace("/hostLoading");
        }
        dispatch({ type: "RESET" });
      } catch (error) {
        alert("닉네임이 중복됩니다");
        dispatch({ type: "RESET" });
      }
    }
  };
  return (
    <>
      <InputBox
        placeholder="닉네임을 입력해주세요"
        className=" font-Neo text-center"
        maxLength={15}
        onChange={onChangeData}
        value={data}
      />
      <div className=" font-Neo text-text-gray text-xs">한글 최대 15자</div>
      <button
        className=" w-32 h-9 bg-main-color rounded-2xl text-white font-Neo font-bold mt-[20px]"
        onClick={onClick}
      >
        시작하기
      </button>
    </>
  );
};

export default NicknameInput;

const InputBox = styled.input`
  width: 280px;
  height: 60px;
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid #64422e;
  :focus {
    outline: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
