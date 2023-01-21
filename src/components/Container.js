import React from "react";

const Container = ({ children }) => {
  return (
    <div className="mx-auto mb-[100px] py-10  sm:mb-0 sm:pb-[120px] lg:max-w-container lg:pl-[100px] ">
      {children}
    </div>
  );
};

export default Container;
