import React from "react";
import GuestImage from "./GuestImage";
import useGetImage from "@/query/get/useGetImage";
import { useQuestionStore } from "@/store/question";
import ImageProgress from "./ImageProgress";

const SurveyImageCompo = () => {
  const imageCode = useQuestionStore.use.questionImg();
  const { imgUrl } = useGetImage(imageCode);
  return <>{imgUrl ? <GuestImage src={imgUrl} /> : <ImageProgress />}</>;
};

export default SurveyImageCompo;
