import { css, styled } from "twin.macro";

export const UtilBtn = styled.button(({ isUrl }: { isUrl: boolean }) => [
  css`
    width: 280px;
    height: 60px;
    border-radius: 20px;
    padding: 18px 20px;
    background-color: white;
    color: #64422e;
    border: 1px solid #866b5b;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: inset -1px -2px 6px rgba(0, 0, 0, 0.15);
    font-weight: 500;
    font-size: 16px;
  `,
  isUrl
    ? css`
        justify-content: space-around;
      `
    : css`
        justify-content: center;
      `,
]);
