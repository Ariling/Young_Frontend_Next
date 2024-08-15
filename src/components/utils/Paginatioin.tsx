import React from "react";
import Next from "@/svg/next.svg";
import Back from "@/svg/back.svg";
import useGetPageRange from "@/hooks/useGetPageRange";
import { styled } from "twin.macro";

interface PaginationProp {
  totalPageNum: number;
  pageNum: number;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination = (props: PaginationProp) => {
  const page = useGetPageRange(props.pageNum, props.totalPageNum);
  return (
    <PaginationWrapper>
      <Back
        onClick={() => {
          if (props.pageNum === 1) {
            return;
          } else {
            props.setPageNum(props.pageNum - 1);
          }
        }}
      />
      {page[0] > 1 && <button onClick={() => props.setPageNum(1)}>1</button>}
      {page[0] > 2 && <span>...</span>}
      {page.map((el) => {
        return (
          <button
            key={el}
            className={props.pageNum === el ? "select" : ""}
            onClick={() => {
              props.setPageNum(el);
            }}
          >
            {el}
          </button>
        );
      })}
      {page[page.length - 1] < props.totalPageNum - 1 && <span>...</span>}
      {page[page.length - 1] < props.totalPageNum && (
        <button onClick={() => props.setPageNum(props.totalPageNum)}>
          {props.totalPageNum}
        </button>
      )}
      <Next
        onClick={() => {
          props.setPageNum(props.pageNum + 1);
        }}
      />
    </PaginationWrapper>
  );
};

export default Pagination;

const PaginationWrapper = styled.div`
  margin: 0 auto 20px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 248px;
  height: 32px;
  & > button {
    background-color: transparent;
    padding: 4px;
    width: 32px;
    height: 32px;
    color: var(--Grey-600, #adb3ba);
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    text-align: center;
    border: none;
    &.select {
      color: black;
    }
  }
`;
