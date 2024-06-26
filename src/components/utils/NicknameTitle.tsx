import React, { ReactNode } from "react";

const NicknameTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" font-Neo font-bold text-xl text-[#64422e] mb-12">
      {children}
    </div>
  );
};

export default NicknameTitle;
