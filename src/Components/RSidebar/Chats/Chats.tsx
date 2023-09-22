import React from "react";
import "./Chats.scss";

export function Chats() {
  return (
    <div className="Chats">
      <button className="ChatBtn">
        <img src="https://i.postimg.cc/KYMq1S6j/icon-Chat.png" alt="" />
      </button>
      <div className="circle">
        <img src="https://i.postimg.cc/W3JDcZ8H/7309667.jpg" alt="" />
        <div className="notchActivated">2</div>
        <div className="InGame">in Game</div>
      </div>
      <div className="circle">
        <img src="https://i.postimg.cc/Jz1BHG7s/7309670.jpg" alt="" />
        <div className="notchActivated"></div>
      </div>
      <div className="circle">
        <img src="https://i.postimg.cc/zvZyzfPX/9440461.jpg" alt="" />
        <div className="notchDisabled"></div>
      </div>
    </div>
  );
}

export default Chats;
