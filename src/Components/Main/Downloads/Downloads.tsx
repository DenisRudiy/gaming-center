import React from "react";
import "./Downloads.scss";

export function Downloads() {
  return (
    <div className="MainDown">
      <div className="Linked">
        <h4>Last Download</h4>
        <button>See more</button>
      </div>
      <div className="Downloads">
        <div className="Ellipse1"></div>
        <div className="Ellipse2"></div>
        <div className="Ellipse3"></div>
        <div className="DownloadsInfo">
          <div className="LeftPart">
            <div className="ImageBg">
              <img src="https://i.postimg.cc/wv51XGLS/image-42-1.png" alt="" />
            </div>
            <div className="Info">
              <h2>Warzone 2.0</h2>
              <div className="Genre">Action Simulator</div>
            </div>
          </div>
          <div className="RightPart">
            <div>
              <p id="Time">1 hour 14 min.</p>
              <p id="Weight">324Mb For 19 Gb</p>
            </div>
            <button>
              <img src="https://i.postimg.cc/zD7qFRrs/play.png" alt="" />
            </button>
            <button id="Exit">
              <img src="https://i.postimg.cc/NFqPVbJ8/add.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Downloads;
