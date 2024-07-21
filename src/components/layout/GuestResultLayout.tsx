import React, { forwardRef, useRef } from "react";
import GuestImage from "../utils/GuestImage";

interface ILayout {
  imgsrc: string;
  title: string;
  first: string;
  now: string;
}
// 이렇게 ref를 지정해서 하면 다른 컴포를 건드리지 않고도 ref를 전달받을 수 있다.
// 꼭 display를 처리해야되는데 그러지 않으면 export가 제대로 되지 않는다.
const GuestResultLayout = forwardRef<HTMLDivElement, ILayout>((props, ref) => {
  return (
    <>
      <div className="mb-8" ref={ref}>
        <GuestImage src={props.imgsrc} />
      </div>
      <div className="flex flex-col items-center text-center gap-6 px-3 font-Neo font-bold">
        <div className=" text-base">{props.title}</div>
        <div className=" text-sm text-[#555555]">{props.first}</div>
        <div className="text-sm text-[#555555]">{props.now}</div>
      </div>
    </>
  );
});

GuestResultLayout.displayName = "GuestResultLayout";

export default GuestResultLayout;
