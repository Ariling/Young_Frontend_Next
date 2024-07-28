import request from "./request";
import { useQuestionStore } from "@/store/question";
import { useRouter } from "next/router";
import { axiosInstance } from "@/config";

interface INicknameParam {
  hostId: string;
  guestName: string;
}

type TNicknameResponse = {
  message: string;
  name: string;
};

export const getNicknameCheck = async (props: INicknameParam) => {
  const response = await request<null, TNicknameResponse, INicknameParam>({
    uri: `/names/guests`,
    method: "get",
    params: {
      hostId: props.hostId,
      guestName: props.guestName,
    },
  });

  return response.data;
};

export const postGuestResult = async (
  hostId: string,
  guestName: string,
  questionArray: number[]
) => {
  try {
    const response = await axiosInstance.post("/responses", {
      hostId,
      guestName,
      animal: questionArray[0],
      emoji: questionArray[1],
      color: questionArray[2],
      first: questionArray[3],
      now: questionArray[4],
    });
    return response.data;
  } catch (error) {
    console.error("Error posting guest result:", error);
    throw error;
  }
};
