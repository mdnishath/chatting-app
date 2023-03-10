import React from "react";
import Container from "../components/Container";
import GroupList from "../components/GroupList";
import FriendList from "../components/FriendList";
import { IoCall, IoSend } from "react-icons/io5";
import { BsCameraVideoFill } from "react-icons/bs";
import {
  AiTwotoneAudio,
  AiOutlineCamera,
  AiOutlineSelect,
} from "react-icons/ai";

const Message = () => {
  return (
    <Container>
      <div className="grid grid-cols-1  gap-8 px-2 sm:grid-cols-1 sm:px-4 md:px-4 lg:grid-cols-3 lg:px-4 xl:px-0">
        <div className=" order-2 lg:order-1">
          <GroupList />
        </div>
        <div className="relative order-1 col-span-1 rounded-xl shadow-all sm:col-span-1 sm:row-span-2 lg:order-2 lg:col-span-2  lg:row-span-2">
          <div className="min-h-[400px] px-5">
            <div className=" border-b px-5 pt-5">
              <div className="flex items-center justify-between py-4">
                <div className="h-[60px] w-[60px] rounded-full shadow-profile">
                  <img
                    className="w-full"
                    src="images/profile.png"
                    alt="profile"
                  />
                </div>

                <div className="pl-5">
                  <h4 className="text-sm font-semibold sm:text-base">
                    Nishath Khandakar
                  </h4>
                  <div className="flex items-center gap-x-2">
                    <div className="h-[8px] w-[8px] rounded-full bg-green-400"></div>
                    <h4 className="text-sm font-semibold text-slate-500">
                      Online
                    </h4>
                  </div>
                </div>
                <div className="flex grow justify-end gap-x-2 text-2xl text-primary sm:gap-4">
                  <IoCall />
                  <BsCameraVideoFill />
                </div>
              </div>
            </div>

            <div className=" mt-5">
              {/* <div className="flex px-5">
                <div className="relative inline-block rounded-[10px] bg-chat p-4 before:absolute before:bottom-[-4px] before:left-[-6px] before:h-4 before:w-4 before:translate-x-0 before:translate-y-[-2px] before:rounded-br-[10px] before:border before:border-l-[0px] before:border-chat before:bg-chat before:content-[''] after:absolute after:bottom-[-2px] after:left-[-16px] after:h-4 after:w-4 after:rounded-br-[10px] after:bg-white after:content-['']">
                  <p>Hey There !</p>
                </div>
              </div> */}
              <div class="chat chat-start">
                <div class="chat-bubble bg-primary">
                  It's over Anakin, <br />I have the high ground.
                </div>
              </div>
              <div class="chat chat-end">
                <div class="chat-bubble">You underestimate my power!</div>
              </div>
            </div>
            <div className=" absolute bottom-[20px] left-0 w-full px-10 ">
              <div className="flex items-center gap-x-3 border-t pt-5">
                <div className="relative w-full">
                  <input
                    className="w-full rounded-lg bg-chat px-[50px] py-2 outline-none placeholder:text-[12px] placeholder:text-gray-700 sm:placeholder:text-base"
                    type="text"
                    placeholder="Enter your message"
                  />
                  <AiOutlineCamera className=" absolute top-[50%] right-2 translate-y-[-50%] text-[24px] text-primary" />
                  <AiOutlineSelect className=" absolute top-[50%] left-2 translate-y-[-50%] text-[24px] text-primary" />
                </div>

                <AiTwotoneAudio className=" text-[30px] text-primary" />
                <IoSend className=" text-[30px] text-primary" />
              </div>
            </div>
          </div>
        </div>
        <div className=" order-3 lg:order-3">
          <FriendList />
        </div>
      </div>
    </Container>
  );
};

export default Message;
