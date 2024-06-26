import React from "react";
import GuestImage from "../utils/GuestImage";

interface ILayout {
  imgsrc: string;
  title: string;
  first: string;
  now: string;
}

const GuestResultLayout = (props: ILayout) => {
  return (
    <>
      <div className="mb-8">
        <GuestImage src={props.imgsrc} />
      </div>
      <div className="flex flex-col items-center text-center gap-6 px-3 font-Neo font-bold">
        <div className=" text-base">{props.title}</div>
        <div className=" text-sm text-[#555555]">{props.first}</div>
        <div className="text-sm text-[#555555]">{props.now}</div>
      </div>
    </>
  );
};

export default GuestResultLayout;
