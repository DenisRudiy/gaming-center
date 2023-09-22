import React from "react";
import "./Friends.scss";

export function Friends() {
  return (
    <div className="Friends">
      <img
        src="https://i.postimg.cc/tJWVW6Vx/image-42.png"
        alt=""
        className="MainAvatar"
      />
      <img src="https://i.postimg.cc/9X79v6NQ/Vector.png" alt="" />
      <div className="circle">
        <img src="https://i.postimg.cc/W3JDcZ8H/7309667.jpg" alt="" />
        <div className="notchActivated"></div>
        <div className="InGame">in Game</div>
      </div>
      <div className="circle">
        <img src="https://i.postimg.cc/JhFyFxNX/7309689.jpg" alt="" />
        <div className="notchActivated"></div>
        <div className="InGame">in Game</div>
      </div>
      <div className="circle">
        <img src="https://i.postimg.cc/Jz1BHG7s/7309670.jpg" alt="" />
        <div className="notchActivated"></div>
      </div>
      <div className="circle">
        <img src="https://i.postimg.cc/Kv7MYnbX/7309675.jpg" alt="" />
        <div className="notchDisabled"></div>
      </div>
      <div className="circle">
        <img src="https://i.postimg.cc/zvZyzfPX/9440461.jpg" alt="" />
        <div className="notchDisabled"></div>
      </div>
      <div className="circle">
        <img src="https://i.postimg.cc/x1tNvnqt/7309703.jpg" alt="" />
        <div className="notchDisabled"></div>
      </div>
    </div>
  );
}

export default Friends;
