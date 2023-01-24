import React, { useEffect, useState } from "react";
import { getDatabase, ref, set, push, onValue, get } from "firebase/database";
import { useSelector } from "react-redux";
const FriendList = () => {
  const db = getDatabase();
  const data = useSelector((state) => state.user.user);

  const [friends, setFriends] = useState([]);

  // fetch frinds only
  useEffect(() => {
    const userRef = ref(db, "friends/");
    onValue(userRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        if (
          item.val().receiveID === data.uid ||
          item.val().senderID === data.uid
        ) {
          arr.push(item.val());
        }
      });

      console.log(arr);
      setFriends(arr);
    });
  }, []);
  return (
    <div className="h-[360px] w-full overflow-x-hidden rounded-xl bg-white p-5 shadow-all">
      <div className="flex justify-between">
        <h3 className=" text-2xl font-semibold text-primary">Friend List</h3>
        <div>
          <button className="inline-block px-4 py-1 text-lg font-semibold text-primary">
            Search
          </button>
        </div>
      </div>
      <div className="mt-5">
        <div className="divide-y">
          {friends.map((item) => (
            <div className="flex items-center justify-between py-4">
              <div className="h-[40px] w-[40px] rounded-full shadow-lg">
                <img
                  className="w-full rounded-full"
                  src={
                    data.uid === item.receiveID
                      ? item.senderImage
                      : item.receiveImage
                  }
                  alt="profile"
                />
              </div>

              <div className="pl-5">
                <h4 className="text-base font-semibold">
                  {data.uid === item.receiveID
                    ? item.senderName
                    : item.receiveName}
                </h4>
              </div>
              <div className="flex grow justify-end gap-2">
                <button className="inline-block rounded-full bg-primary px-4 py-1 text-[12px] font-semibold text-white shadow-btn">
                  Unfriend
                </button>
                <button className="inline-block rounded-full bg-primary px-4 py-1 text-[12px] font-semibold text-white shadow-btn">
                  Block
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendList;
