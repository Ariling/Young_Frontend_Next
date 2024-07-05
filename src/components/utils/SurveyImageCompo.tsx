import React from "react";
import GuestImage from "./GuestImage";
import useGetImage from "@/query/get/useGetImage";
import { useQuestionStore } from "@/store/question";

const SurveyImageCompo = () => {
  const imageCode = useQuestionStore.use.questionImg();
  const { imgUrl } = useGetImage(imageCode);
  return (
    <>
      <GuestImage src={imgUrl} />
    </>
  );
};

export default SurveyImageCompo;
