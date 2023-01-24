import React, { useState, useEffect } from "react";
import Image from "../Image";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { useSelector } from "react-redux";
const Profile = ({ item }) => {
  const db = getDatabase();
  const data = useSelector((state) => state.user.user);
  const [request, setRequest] = useState([]);
  const [friendList, setFriendList] = useState([]);
  const [blockList, setBlocklist] = useState([]);
  const handleAddFriend = async (item) => {
    console.log(item);
    try {
      await set(push(ref(db, "friendrequestList")), {
        senderName: data.displayName,
        senderID: data.uid,
        senderImage: data.photoURL,
        senderEmail: data.email,
        receiveName: item.name,
        receiveID: item.id,
        receiveImage: item.image,
        receiveEmail: item.email,
      });
      console.log("request created");
    } catch (error) {
      console.log(error);
    }
  };

  // fetch requestlist
  useEffect(() => {
    const userRef = ref(db, "friendrequestList/");
    onValue(userRef, (snapshot) => {
      const arr = [];
      if (snapshot.exists()) {
        snapshot.forEach((item) => {
          // console.log(data.uid, item.val().receiveID);
          arr.push(item.val().receiveID + item.val().senderID);
        });
      }
      // console.log(arr);
      setRequest(arr);
    });
  }, []);
  // fetch blockList
  useEffect(() => {
    const userRef = ref(db, "blockList/");
    onValue(userRef, (snapshot) => {
      const arr = [];
      if (snapshot.exists()) {
        snapshot.forEach((item) => {
          // console.log(data.uid, item.val().receiveID);
          arr.push(item.val().receiveID + item.val().senderID);
        });
      }
      // console.log(arr);
      setBlocklist(arr);
    });
  }, []);

  // Friend List fetch
  useEffect(() => {
    const userRef = ref(db, "friends/");
    onValue(userRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val().receiveID + item.val().senderID);
      });

      // console.log(arr);
      setFriendList(arr);
    });
  }, []);
  // console.log(request.includes("cpxrp3smykcy92VxVndnhctB3Mn2"));

  return (
    <>
      {item.id !== data.uid && (
        <div className="flex items-center justify-between py-4">
          <div className="h-[40px] w-[40px] rounded-full shadow-lg">
            <Image src={item.image} />
          </div>
          <div className="pl-5">
            <h4 className="text-sm font-semibold">{item.name}</h4>
            <h4 className="text-sm font-normal text-slate-500">{item.email}</h4>
          </div>
          <div className="flex grow justify-end">
            {request.includes(data.uid + item.id) ||
            request.includes(item.id + data.uid) ? (
              <button className="inline-block rounded-full bg-primary px-4 py-1 text-[12px] font-semibold text-white shadow-btn">
                Pending
              </button>
            ) : friendList.includes(data.uid + item.id) ||
              friendList.includes(item.id + data.uid) ? (
              <button className="inline-block rounded-full bg-primary px-4 py-1 text-[12px] font-semibold text-white shadow-btn">
                Friend
              </button>
            ) : blockList.includes(data.uid + item.id) ||
              blockList.includes(item.id + data.uid) ? (
              <button
                className="inline-block rounded-full bg-primary px-4 py-1 text-[12px] font-semibold text-white shadow-btn"
                disabled
              >
                Blocked
              </button>
            ) : (
              <button
                onClick={() => handleAddFriend(item)}
                className="inline-block rounded-full bg-primary px-4 py-1 text-[12px] font-semibold text-white shadow-btn"
              >
                Add Friend
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
