import React, { useState, useEffect } from "react";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
} from "firebase/database";
import Image from "./Image";
import { useSelector } from "react-redux";

const Blocklist = () => {
  const db = getDatabase();
  const data = useSelector((state) => state.user.user);
  const [blockList, setBlocklist] = useState();

  // Fetch block list
  useEffect(() => {
    onValue(ref(db, "blockList"), (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        arr.push({ ...item.val(), blockKey: item.key });
      });
      // console.log(arr);
      setBlocklist(arr);
    });
  }, []);

  // handle unblock
  const handleUnblock = async (item) => {
    await set(push(ref(db, "friends")), {
      ...item,
    });
    await remove(ref(db, "blockList/" + item.blockKey));
  };
  return (
    <div className="h-[360px] w-full overflow-x-hidden rounded-xl bg-white p-5 shadow-all">
      <div className="flex justify-between">
        <h3 className=" text-2xl font-semibold text-primary">Block List</h3>
        <div>
          <button className="inline-block px-4 py-1 text-lg font-semibold text-primary">
            Search
          </button>
        </div>
      </div>
      <div className="mt-5">
        <div className="divide-y">
          {blockList && blockList.length
            ? blockList.map((item) => (
                <div
                  key={item.frID}
                  className="flex items-center justify-between py-4"
                >
                  <div className="h-[40px] w-[40px] rounded-full shadow-lg">
                    <Image
                      src={
                        data.id === item.blockBy
                          ? item.senderImage
                          : item.receiveImage
                      }
                    />
                  </div>

                  <div className="pl-5">
                    <h4 className="text-base font-semibold">
                      {data.id === item.blockBy
                        ? item.senderName
                        : item.receiveName}
                    </h4>
                  </div>
                  <div className="flex grow justify-end">
                    <button
                      onClick={() => handleUnblock(item)}
                      className="inline-block rounded-full bg-primary px-4 py-1 text-[12px] font-semibold text-white shadow-btn"
                      disabled={item.blockBy != data.uid}
                    >
                      Unblock
                    </button>
                  </div>
                </div>
              ))
            : "not found"}
        </div>
      </div>
    </div>
  );
};

export default Blocklist;
