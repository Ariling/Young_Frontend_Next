import { UtilBtn } from "@/styles/buttonStyle";
import saveAs from "file-saver";
import html2canvas from "html2canvas";
import React, { RefObject } from "react";
import Download from "@/svg/download.svg";

const ImgDownloadBtn = ({ divRef }: { divRef: RefObject<HTMLDivElement> }) => {
  const handleDownload = async () => {
    if (!divRef.current) return;

    try {
      const canvas = await html2canvas(divRef.current, { scale: 2 });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, "result.png");
        }
      });
    } catch (error) {
      console.error("Error converting div to image:", error);
    }
  };

  return (
    <>
      <UtilBtn isUrl={false} onClick={handleDownload}>
        이미지 다운로드
        <Download />
      </UtilBtn>
    </>
  );
};

export default ImgDownloadBtn;
