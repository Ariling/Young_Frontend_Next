import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ProgressCompo from "@/components/utils/ProgressCompo";

const GuestResultPageCompo = dynamic(
  () => import("@/components/guestResult/GuestResultPageCompo"),
  { ssr: false }
);

const Index = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <ProgressCompo />;
  }

  return <GuestResultPageCompo />;
};

export default Index;
