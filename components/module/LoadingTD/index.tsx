import React from "react";
import { ThreeDots } from "react-loader-spinner";

function LoadingTD() {
  return (
    <ThreeDots
      color="#304ffe"
      height={45}
      ariaLabel="three-dots-loading"
      visible={true}
      wrapperClass="mx-auto"
    />
  );
}

export default LoadingTD;
