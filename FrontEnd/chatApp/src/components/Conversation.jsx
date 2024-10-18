import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-600 rounded p-2 py-1 cursor-pointer">
        <div className="avater online">
          <div className="w-12 rounded-full">
            <img src="https://cdn2.iconfinder.com/data/icons/avatars-60/5985/24-Maid-256.png" alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">    
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200">Tomer Eliyahu</p>
                <span className="text-xl">😂</span>
            </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default Conversation;
