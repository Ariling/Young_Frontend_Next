import React, { useState } from "react";
import { styled } from "twin.macro";

const NicknameInput = () => {
  const [data, setData] = useState<string>("");
  const onChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
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
      <button className=" w-32 h-9 bg-main-color rounded-2xl text-white font-Neo font-bold mt-[20px]">
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
