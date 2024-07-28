import { Tstatistic } from "@/types/THost";
import React, { ReactNode } from "react";
import { css, styled } from "twin.macro";

const StatisticResult = ({
  children,
  result,
  titleArray,
}: {
  children: ReactNode;
  result: Array<Tstatistic>;
  titleArray: Array<string>;
}) => {
  return (
    <div className="mb-7">
      <div className=" text-base text-[#1c1c1c] mb-3">{children}</div>
      {result && Array.isArray(result) ? (
        <>
          {result.map((e) => {
            return (
              <>
                <div className="mb-2" key={e.index}>
                  <div className="flex text-xs gap-3">
                    <div className=" w-16">
                      {e.index - 1 === -1 ? null : titleArray[e.index - 1]}
                    </div>
                    <PercentageBarContainer>
                      <PercentageBar width={e.percent} />
                    </PercentageBarContainer>
                    <PercentageTextBox>
                      <div className=" font-Neo text-xs">{e.percent}%</div>
                    </PercentageTextBox>
                  </div>
                </div>
              </>
            );
          })}
        </>
      ) : null}
    </div>
  );
};

export default StatisticResult;

const PercentageBarContainer = styled.div`
  display: flex;
  padding: 0.375rem;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.625rem;
  flex: 1 0 0;
  border-radius: 0.625rem;
  background: var(--Light-Light-Gray, #e8e8e8);
`;

const PercentageBar = styled.div(({ width }: { width: number }) => [
  css`
    height: 0.75rem;
    align-self: stretch;
    border-radius: 0.375rem;
    background: var(--Brown, #64422e);
    width: ${width}%;
  `,
]);

const PercentageTextBox = styled.div`
  display: flex;
  width: 2.75rem;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
`;
