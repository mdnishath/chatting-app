import React from "react";

const Container = ({ children }) => {
  return (
    <div className="lg:max-w-container md:pl-100 mx-auto  mb-[100px] py-10 sm:mb-0 sm:pb-[120px] lg:pl-[120px] lg:pr-[20px] xl:pl-[200px] xl:pr-[100px]">
      {children}
    </div>
  );
};

export default Container;
