import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className=" h-screen bg-gray-100 font-work">
      <div className="flex h-screen flex-col justify-center sm:flex-row sm:items-center">
        <div className="h-1/2 sm:flex sm:h-full sm:w-1/2 sm:items-center">
          <img src="images/login.svg" alt="login" />
        </div>
        <div className=" flex h-1/2 flex-col items-center justify-center bg-white sm:h-full sm:w-1/2">
          <h1 className="text-6xl font-bold text-slate-700 sm:text-4xl md:text-6xl">
            <span className=" text-primary">Chat</span>Zone
          </h1>
          <div className="mt-5 flex cursor-pointer items-center gap-x-3 rounded-full border border-primary py-3 px-8 text-lg font-semibold shadow-lg">
            <FcGoogle />
            <p className="text-slate-600">Login with google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
