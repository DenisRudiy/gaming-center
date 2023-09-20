import React from "react";
import "./RSidebar.scss";
import { Chats } from "./Chats/Chats";
import { Friends } from "./Friends/Friends";

export function RSidebar() {
  return (
    <div className="RSidebar">
      <Friends />
      <Chats />
    </div>
  );
}

export default RSidebar;
