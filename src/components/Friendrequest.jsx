import React, { useEffect, useState } from "react";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
} from "firebase/database";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const Friendrequest = () => {
  const db = getDatabase();
  const data = useSelector((state) => state.user.user);
  const [friendrequestList, setFriendRequestList] = useState([]);

  // Fetch friend request
  useEffect(() => {
    const userRef = ref(db, "friendrequestList");
    onValue(userRef, (snapshot) => {
      const arr = [];
      if (snapshot.exists()) {
        snapshot.forEach((item) => {
          // console.log(data.uid, item.val().receiveID);
          if (item.val().receiveID === data.uid) {
            arr.push({ ...item.val(), key: item.key });
          }
        });
      }
      console.log(arr);
      setFriendRequestList(arr);
    });
  }, []);

  const handleFriendRequest = async (item) => {
    console.log(item);
    try {
      await set(push(ref(db, "friends/")), {
        ...item,
        frID: data.uid + item.senderID,
      });
      console.log("accpted friend");
      await remove(ref(db, "friendrequestList/" + item.key));
      console.log("request removed");
    } catch (error) {
      // return error;
      console.log(error);
    }
  };
  return (
    <div className="h-[360px] w-full overflow-x-hidden rounded-xl bg-white p-5 shadow-all">
      <div className="flex justify-between">
        <h3 className=" text-2xl font-semibold text-primary">Friend Request</h3>
        <div>
          <button className="inline-Accpet px-4 py-1 text-lg font-semibold text-primary">
            Search
          </button>
        </div>
      </div>
      <div className="mt-5">
        <div className="divide-y">
          {friendrequestList.length > 0
            ? friendrequestList.map((item) => (
                <div
                  key={item.key}
                  className="flex items-center justify-between py-4"
                >
                  <div className="h-[40px] w-[40px] rounded-full shadow-lg">
                    <img
                      className="w-full rounded-full"
                      src={item.senderImage}
                      alt="profile"
                    />
                  </div>

                  <div className="pl-5">
                    <h4 className="text-base font-semibold">
                      {item.senderName}
                    </h4>
                  </div>
                  <div className="flex grow justify-end">
                    <button
                      onClick={() => handleFriendRequest(item)}
                      className="inline-block rounded-full bg-primary px-4 py-1 text-[12px] font-semibold text-white shadow-btn"
                    >
                      Accpet
                    </button>
                  </div>
                </div>
              ))
            : "Not found"}
        </div>
      </div>
    </div>
  );
};

export default Friendrequest;
