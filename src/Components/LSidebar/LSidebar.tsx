import React from "react";
import "./LSidebar.scss";

export function LSidebar() {
  return (
    <div className="LSidebar">
      <img src="https://i.postimg.cc/nhvTqcg6/icons8-crystal-100.png" alt="" />
      <div className="NavSection">
        <button className="DefaultBtn">
          <img src="https://i.postimg.cc/9fTBRzdq/akar-icons-home.png" alt="" />
        </button>
        <button className="DefaultBtn">
          <img src="https://i.postimg.cc/qRTx80wD/Group.png" alt="" />
        </button>
        <button className="UncommonBtn">
          <img src="https://i.postimg.cc/8zxHzL6S/sms.png" alt="" />
        </button>
        <button className="DefaultBtn">
          <img src="https://i.postimg.cc/wj12zw32/la-user-friends.png" alt="" />
        </button>
        <button className="DefaultBtn">
          <img src="https://i.postimg.cc/LsvTSG2J/Mask-group.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default LSidebar;
