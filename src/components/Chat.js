import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { BsThreeDotsVertical, BsArrowLeft } from "react-icons/bs";
import { FiPaperclip, FiSend } from "react-icons/fi";
import Message from "./Message";
import { Link ,useParams } from "react-router-dom";
import messages from '../data/chatData'


const Chat = () => {
  function fileOpen() {
    console.log('click');
  }
  let { name } = useParams();
  return (
    <div className="">
      {" "}
      <div className="">
        {" "}
        <div className="bg-red-400 flex justify-between items-center p-3 text-black">
          <div className="flex justify-center items-center gap-2 ">
            <Link to={'/'}><BsArrowLeft className="text-[19px] hover:text-[24px] transition-all  cursor-pointer" /></Link>
            <div>
              <img
                className="rounded-full w-[40px] h-[40px]"
                src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                alt="userImg"
              />
            </div>
            <h2 className=" text-[20px]">{name}</h2>
          </div>
          <BsThreeDotsVertical className="cursor-pointer text-[20px] hover:text-[24px] transition-all" />
        </div>
        <ScrollToBottom className="h-[84.1vh]">
          {messages.map(({ id, message }) => {
            return <Message id={id} message={message}  />;
          })}
        </ScrollToBottom>{" "}
        <div className="flex gap-2 p-2  bg-red-400">
          {/* onKeyDown={(event) => (event.key === "Enter" ? send() : null)} */}
          <input
            placeholder="Text message"
            type="text"
            id="chatInput"
            className="border-2 border-red-400 flex-1 p-2 rounded-xl ml-2 focus:outline-none"
          />
          <button className=" p-2 bg-white hover:bg-red-300 font-bold rounded-[20%] text-red-400 hover:text-white transition-all">
            <input type="file" className="hidden" onClick={fileOpen} />
            <FiPaperclip className="mx-1 font-bold text-[22px]" />
          </button>
          {/* onClick={send}  */}
          <button className=" p-2 bg-white hover:bg-red-300 text-red-400 hover:text-white  rounded-[20%] transition-all">
            <FiSend className="mx-1 font-bold text-[22px] " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;

// import React, { useEffect, useState } from 'react'
// import { user } from "../Join/Join";
// import socketIo from "socket.io-client";
// import "./Chat.css";
// import sendLogo from "../../images/send.png";
// import Message from "../Message/Message";
// import ReactScrollToBottom from "react-scroll-to-bottom";
// import closeIcon from "../../images/closeIcon.png";

// let socket;

// const ENDPOINT = "https://demo-cchat.herokuapp.com/";

// const Chat = () => {
//     const [id, setid] = useState("");
//     const [messages, setMessages] = useState([])

//     const send = () => {
//         const message = document.getElementById('chatInput').value;
//         socket.emit('message', { message, id });
//         document.getElementById('chatInput').value = "";
//     }

//     console.log(messages);
//     useEffect(() => {
//         socket = socketIo(ENDPOINT, { transports: ['websocket'] });

//         socket.on('connect', () => {
//             alert('Connected');
//             setid(socket.id);

//         })
//         console.log(socket);
//         socket.emit('joined', { user })

//         socket.on('welcome', (data) => {
//             setMessages([...messages, data]);
//             console.log(data.user, data.message);
//         })

//         socket.on('userJoined', (data) => {
//             setMessages([...messages, data]);
//             console.log(data.user, data.message);
//         })

//         socket.on('leave', (data) => {
//             setMessages([...messages, data]);
//             console.log(data.user, data.message)
//         })

//         return () => {
//             socket.emit('disconnect');
//             socket.off();
//         }
//     }, [])

//     useEffect(() => {
//         socket.on('sendMessage', (data) => {
//             setMessages([...messages, data]);
//             console.log(data.user, data.message, data.id);
//         })
//         return () => {
//             socket.off();
//         }
//     }, [messages])

//     return (
//         <div className="chatPage">
//             <div className="chatContainer">
//                 <div className="header">
//                     <h2>C CHAT</h2>
//                     <a href="/"> <img src={closeIcon} alt="Close" /></a>
//                 </div>
//                 <ReactScrollToBottom className="chatBox">
//                     {messages.map((item, i) => <Message user={item.id === id ? '' : item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} />)}
//                 </ReactScrollToBottom>
//                 <div className="inputBox">
//                     <input onKeyDown={(event) => event.key === 'Enter' ? send() : null} type="text" id="chatInput" />
//                     <button onClick={send} className="sendBtn"><img src={sendLogo} alt="Send" /></button>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Chat
