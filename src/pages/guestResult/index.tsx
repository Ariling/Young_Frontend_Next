import React from "react";
import dynamic from "next/dynamic";

const Index = () => {
  const GuestResultPageCompo = dynamic(
    () => import("@/components/guestResult/GuestResultPageCompo"),
    {
      ssr: false,
    }
  );
  return (
    <>
      <GuestResultPageCompo />
    </>
  );
};

export default Index;
