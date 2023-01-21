import React from "react";

const Mygroups = () => {
  return (
    <div className="h-[360px] w-full overflow-x-hidden rounded-xl bg-white p-5 shadow-all">
      <div className="flex justify-between">
        <h3 className=" text-2xl font-semibold text-primary">My Groups</h3>
        <div>
          <button className="inline-block px-4 py-1 text-lg font-semibold text-primary">
            Search
          </button>
        </div>
      </div>
      <div className="mt-5">
        <div className="divide-y">
          <div className="flex items-center justify-between py-4">
            <div className="h-[40px] w-[40px] rounded-full shadow-lg">
              <img className="w-full" src="images/profile.png" alt="profile" />
            </div>

            <div className="pl-5">
              <h4 className="text-base font-semibold">React JS</h4>
              <span className="inline-block rounded-full bg-slate-100 px-3 text-[12px] text-primary">
                React
              </span>
            </div>
            <div className="flex grow justify-end">
              <button className="inline-block rounded-full bg-primary px-4 py-1 text-[12px] font-semibold text-white shadow-btn">
                Join
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between py-4">
            <div className="h-[40px] w-[40px] rounded-full shadow-lg">
              <img className="w-full" src="images/profile.png" alt="profile" />
            </div>

            <div className="pl-5">
              <h4 className="text-base font-semibold">React JS</h4>
              <span className="inline-block rounded-full bg-slate-100 px-3 text-[12px] text-primary">
                React
              </span>
            </div>
            <div className="flex grow justify-end">
              <button className="inline-block rounded-full bg-primary px-4 py-1 text-[12px] font-semibold text-white shadow-btn">
                Join
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between py-4">
            <div className="h-[40px] w-[40px] rounded-full shadow-lg">
              <img className="w-full" src="images/profile.png" alt="profile" />
            </div>

            <div className="pl-5">
              <h4 className="text-base font-semibold">React JS</h4>
              <span className="inline-block rounded-full bg-slate-100 px-3 text-[12px] text-primary">
                React
              </span>
            </div>
            <div className="flex grow justify-end">
              <button className="inline-block rounded-full bg-primary px-4 py-1 text-[12px] font-semibold text-white shadow-btn">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mygroups;
