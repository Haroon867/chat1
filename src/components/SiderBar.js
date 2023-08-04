import React from "react";
import { Link } from "react-router-dom";
import ScrollToBottom from "react-scroll-to-bottom";
import users from '../data/userData'

const SiderBar = () => {
  
  return (
    <>
      <div className="border">
        <div className=" p-3">
          <h1 className=" text-[18px] font-bold p-[6px]">Chat App</h1>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search name..."
            required
          />
        </div>
        <hr className="" />
        <ScrollToBottom className="h-[85.7vh]">
          {users.map(({ id, userName, msg, time, noti }) => {
            return (
              <Link to={`/chat/${userName}`} key={id}>
                <div className="p-2 border-b py-4" >
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <div>
                        <img
                          className="rounded-full w-[45px] h-[45px]"
                          src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                          alt="userImg"
                        />
                      </div>
                      <div>
                        <h2 className="text-[15px] font-medium">{userName}</h2>
                        <p className="text-[14px]">{msg}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <h2 className="text-[12px] font-medium text-gray-500">
                        {time}
                      </h2>
                      <p
                        className={`text-[14px] ${
                          noti ? "inline-flex" : "hidden"
                        } items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-white bg-red-400 rounded-full`}
                      >
                        {noti}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </ScrollToBottom>
      </div>
    </>
  );
};

export default SiderBar;
