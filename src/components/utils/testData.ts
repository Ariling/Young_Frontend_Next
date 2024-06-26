import { Idata } from "@/store/hostresult";

// 지금은 host도 이거를 쓰면 될 듯?
export const testGuestResult = {
  title: "처음엔 귀엽지만 지금은 웃긴 친구!",
  first:
    "당신은 처음엔 수줍지만 귀여운 친구였어요.\n마치 뭐랄까.. 왜 다들 수업에 갑자기 가버린걸까요?\n흑흑 남겨지니 조금 슬프네요.",
  now: "하지만 이제는 웃기다는 걸 알게 됐어요\n마치 나의 멋사 내의 웃음벨이랄까요?\n당신 없는 멋사 상상할 수 없다 이말이야 ~ ",
};

export const testBlankResult = {
  title: "",
  first: "",
  now: "",
};
export const testHostResult: Idata = {
  image: "131",
  title: "처음에도 밝았고 지금도 밝은 친구!",
  first:
    "처음엔 밝은 친구라고 생각했어요. 처음 만났을 때 환한 미소가 가장 먼저 눈에 들어왔어요. 처음 보는 사이인데도 스스럼없이 다가와 말을 걸고, 대화를 이어나가는 모습이 신기하기도 했어요.",
  now: "지금도 밝고 통통 튀는 친구에요. 웃음이 많아 얘기하다 보면 어느새 함께 웃고 있는 나를 발견하기도 해요. 긍정적이고 밝은 에너지 덕분에 곁에 있으면 기분이 좋아져요.",
  guests: [
    {
      id: "6590226b82dcf588bf8c6744",
      name: "게스트1",
    },
    {
      id: "659022a382dcf588bf8c674a",
      name: "게스트2",
    },
    {
      id: "6590745eaba8b1a315e7d33f",
      name: "게스트3",
    },
    {
      id: "6590226b82dcf588bf8c6742",
      name: "게스트1",
    },
    {
      id: "659022a382dcf588bf8c674c",
      name: "게스트2",
    },
    {
      id: "6590745eaba8b1a315e7d33b",
      name: "게스트3",
    },
    {
      id: "6590226b82dcf588bf8c6741",
      name: "게스트7",
    },
    {
      id: "659022a382dcf588bf8c674z",
      name: "게스트8",
    },
    {
      id: "6590745eaba8b1a315e7d33q",
      name: "게스트9",
    },
  ],
};
