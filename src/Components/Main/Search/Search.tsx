import React from "react";
import "./Search.scss";

export function Search() {
  return (
    <div className="Search">
      <div className="Hello">
        Hi,<div className="Space"></div> <p> Denis</p>
      </div>
      <div className="Search">
        <input type="text" placeholder="Search anything..." />
      </div>
      <div className="Btns">
        <button>
          <img
            src="https://i.postimg.cc/TwDcg6NK/notification-bing.png"
            alt=""
          />
        </button>
        <button>
          <img src="https://i.postimg.cc/qRTx80wD/Group.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Search;
