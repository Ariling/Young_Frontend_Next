import { ImageBox } from "@/styles/questionStyle";
import React from "react";
import { BeatLoader } from "react-spinners";

const ImageProgress = () => {
  return (
    <>
      <ImageBox>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <BeatLoader
            color="rgba(212, 227, 255, 1)"
            size={12}
            margin={3}
            speedMultiplier={0.5}
          />
        </div>
      </ImageBox>
    </>
  );
};

export default ImageProgress;
