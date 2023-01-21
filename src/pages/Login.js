import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { loginWithGoogle } from "../auth/index";
import { useSelector, useDispatch } from "react-redux";
import { insertUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  // Redirect if logedin
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);
  // console.log(user);
  // handle login
  const handleLogin = async () => {
    const user = await loginWithGoogle();
    dispatch(insertUser(user));
    localStorage.setItem("userInfo", JSON.stringify(user));
    navigate("/");
  };
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
          <button
            onClick={handleLogin}
            className="mt-5 flex cursor-pointer items-center gap-x-3 rounded-full border border-primary py-3 px-8 text-lg font-semibold shadow-lg"
          >
            <FcGoogle />
            <p className="text-slate-600">Login with google</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
