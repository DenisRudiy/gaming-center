import React from "react";
import "./LSidebar.scss";
import { BtnRotate } from "../../Services/animation-service";

export function LSidebar() {
  const AddBtnClick = () => {
    BtnRotate("AddBtn");
  };

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
      <div className="AddSection">
        <img src="https://i.postimg.cc/Bvn2nSJx/Add-sidebar.png" alt="" />
        <button className="AddBtn" onClick={AddBtnClick}>
          <img src="https://i.postimg.cc/k5YKV05L/addWhite.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default LSidebar;
