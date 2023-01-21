import React from "react";
import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const Sidbar = () => {
  const active =
    "bg-white rounded text-primary lg:px-5 lg:py-4 px-2 py-2 shadow-bar";
  const notActive = "bg-transparent lg:px-5 lg:py-4 text-white px-2 py-2";
  return (
    <div className="fixed bottom-0 z-[100] w-full bg-primary px-4 lg:top-0 lg:left-0 lg:h-full lg:w-[100px] lg:px-0">
      <div className="flex items-center justify-between gap-y-8 py-5 lg:h-full lg:flex-col">
        <div className="flex justify-around gap-x-8 lg:flex-col lg:gap-y-8">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            <AiOutlineHome className="text-[30px]" />
          </NavLink>
          <NavLink
            to="/message"
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            <HiOutlineChatBubbleOvalLeftEllipsis className="text-[30px] " />
          </NavLink>
          <NavLink
            to="/notification"
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            <IoIosNotificationsOutline className="text-[30px] " />
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            <FiSettings className="text-[30px] " />
          </NavLink>
        </div>
        <div>
          <button className={notActive}>
            <AiOutlineLogout className="text-[30px] " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidbar;
