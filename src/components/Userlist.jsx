import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
// import { useSelector } from "react-redux";
import { getDatabase, ref, onValue } from "firebase/database";
import Loading from "./Loading";
import Profile from "./profiles/UserlistProfile";

const Userlist = () => {
  const db = getDatabase();
  // const user = useSelector((state) => state.user.user);
  const [userList, setUserlist] = useState([]);

  // Fetch userlist from firebase
  useEffect(() => {
    const userRef = ref(db, "users/");
    onValue(userRef, (snapshot) => {
      const arr = [];
      if (snapshot.exists()) {
        snapshot.forEach((item) => {
          arr.push({ ...item.val(), key: item.key });
        });
      }
      setUserlist(arr);
    });
  }, []);

  // console.log(userList);

  return (
    <div className="h-[360px] w-full overflow-x-hidden rounded-xl bg-white p-5 shadow-all">
      <div className="flex justify-between">
        <h3 className=" text-2xl font-semibold text-primary">User List</h3>
        <div>
          <button className="inline-block px-4 py-1 text-lg font-semibold text-primary">
            <BsSearch />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <div className="divide-y">
          {userList && userList.length > 0 ? (
            userList.map((item) => (
              <Profile key={item.key} item={item} type={"userlist"} />
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default Userlist;
