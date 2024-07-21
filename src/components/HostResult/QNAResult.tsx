import React, { ReactNode } from "react";
import Right from "@/svg/arrow-right.svg";

const QNAResult = ({
  children,
  result,
}: {
  children: ReactNode;
  result: string;
}) => {
  return (
    <div>
      <div className=" text-base text-[#1c1c1c] mb-3">{children}</div>
      <div className="flex text-sm text-[#64422e] ml-2 gap-2">
        <Right />
        {result}
      </div>
    </div>
  );
};

export default QNAResult;
