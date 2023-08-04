import React from "react";

const Message = ({ id, message }) => {
  return (
    <div className="w-full pt-2">
      <div
        className={`flex  gap-2 ${
          id ? "justify-start flex-row-reverse" : ""
        } items-center p-2 w-full`}
      >
        <div>
          <img
            className="rounded-full w-[40px] h-[40px]"
            src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
            alt="userImg"
          />
        </div>
        <div className="rounded-3xl w-[40%] p-2 pl-4 pb-3 bg-gray-200 flex items-center overflow-hidden">
          <p className="text-black font-normal text-[16px] break-all">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
