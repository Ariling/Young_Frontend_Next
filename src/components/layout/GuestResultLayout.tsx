import React, { forwardRef, useRef } from "react";
import GuestImage from "../utils/GuestImage";

interface ILayout {
  imgsrc: string;
  title: string;
  first: string;
  now: string;
}

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
