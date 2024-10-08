import React from "react";
import HostDeployForm from "../HostResult/HostDeployForm";
import GuestImage from "../utils/GuestImage";
import { IHostDeploy } from "@/types/THost";
import useGetImage from "@/query/get/useGetImage";

const HostDeployLayout = (props: IHostDeploy) => {
  const image =
    props.data && props.data.data.image ? props.data.data.image : "000";
  const { imgUrl } = useGetImage(image);
  return (
    <>
      {
        // undefined, null, 0, false등을 falsy 값이 아님을 나타내는 방법
        props.data &&
        props.data.data &&
        props.data.data.title &&
        props.data.data.first &&
        props.data.data.now &&
        imgUrl ? (
          <>
            <HostDeployForm
              data={props.data}
              hostName={props.hostName}
              imgUrl={imgUrl}
              divRef={props.divRef}
            />
          </>
        ) : (
          <>
            <div className="mt-3 mb-[60px]">
              <GuestImage src={imgUrl} />
            </div>
          </>
        )
      }
    </>
  );
};

export default HostDeployLayout;
