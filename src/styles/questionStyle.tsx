import { css, styled } from "twin.macro";

export const ImageBox = styled.div`
  width: 320px;
  height: 320px;
  position: relative;
  background-color: transparent;
  border-radius: 20px;
  margin-bottom: 36px;
`;

export const ContentBox = styled.div`
  width: 320px;
  min-height: 329px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const QuestionBtn = styled.button(() => [
  css`
    width: 152px;
    height: 52px;
    border-radius: 20px;
    background-color: white;
    border: 1px solid #866b5b;
    box-shadow: inset -1px -2px 6px rgba(0, 0, 0, 0.15);
    font-weight: 700;
    font-size: 16px;
    &:hover {
      background-color: #d7b27f;
      color: white;
    }
    &:active {
      background-color: #866b5b;
      color: white;
    }
  `,
]);

export const PrevBtn = styled(QuestionBtn)`
  &:hover {
    background-color: #866b5b;
    color: white;
  }
  &:active {
    background-color: #64422e;
    color: white;
  }
`;

export const Text = styled.div`
  color: var(--Brown, #64422e);
  text-align: center;
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
