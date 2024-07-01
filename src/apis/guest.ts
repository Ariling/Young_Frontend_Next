import request from "./request";

interface INicknameParam {
  hostId: string;
  guestName: string;
}

type TNicknameResponse = {
  status: string;
  message: string;
  name: string;
};

export const getNicknameCheck = async (props: INicknameParam) => {
  const response = await request<null, TNicknameResponse, INicknameParam>({
    uri: `/guestnames`,
    method: "get",
    params: {
      hostId: props.hostId,
      guestName: props.guestName,
    },
  });

  return response.data;
};
