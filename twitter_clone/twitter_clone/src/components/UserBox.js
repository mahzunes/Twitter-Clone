import React from "react";

function UserBox() {
  return (
    <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 ">
      <img src="https://pbs.twimg.com/profile_images/1138175077449719808/BdntS7rp_400x400.jpg"
      className="w-11 h-11 rounded-full"
       alt="Profile" />
      <div className=" flex flex-col">
        <span className="font-bold text-md text-black">Enes Başar</span>
        <span className="text-sm text-gray-dark">@basarenes</span>
      </div>

      <div className="flex space-x-1">
        <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
      </div>
    </div>
  );
}

export default UserBox;
