import React from "react";
import { ThreeDots } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#6C63FF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
