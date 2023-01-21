import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Image from "./Image";

const Topbar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  console.log(user);
  //Check if user
  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else return;
  }, []);
  return (
    <>
      {user && (
        <div className="bg-white p-2 shadow-lg lg:ml-[100px]">
          <div className="flex items-center justify-end gap-x-5">
            <h3 className=" text-sm font-semibold">{user.displayName}</h3>
            <div className=" mr-3 h-[40px] w-[40px] rounded-full shadow-lg">
              <Image src={user.photoURL} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Topbar;
