import React from "react";

const Topbar = () => {
  return (
    <div className="bg-white p-2 shadow-lg lg:ml-[100px]">
      <div className="flex items-center justify-end gap-x-5">
        <h3 className=" text-xl font-semibold">Nishath</h3>
        <div className=" mr-3 h-[50px] w-[50px] rounded-full shadow-lg">
          <img className="w-full" src="images/profile.png" alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
