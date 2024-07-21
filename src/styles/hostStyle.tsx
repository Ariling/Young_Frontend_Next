import { css, styled } from "twin.macro";

export const WhiteBox = styled.div(
  ({ isStatistic }: { isStatistic: boolean }) => [
    css`
      position: relative;
      width: 320px;
      min-height: 360px;
      display: flex;
      flex-direction: column;
      background-color: white;
      padding: 20px 16px;
      gap: 20px;
      border-radius: 12px;
      font-weight: 700;
    `,
    isStatistic
      ? css`
          margin-bottom: 20px;
        `
      : css`
          margin-bottom: 120px;
        `,
  ]
);
