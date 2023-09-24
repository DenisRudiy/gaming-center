import React from "react";
import "./Header.scss";

export function Header() {
  return (
    <div className="Header">
      <div className="Popular">
        <div className="Background">
          <div>
            <div className="Btns">
              <button className="PopularBtn">
                <img
                  src="https://i.postimg.cc/7YnDFqFD/ant-design-fire-outlined.png"
                  alt=""
                />
                Popular
              </button>
              <button>
                <img
                  src="https://i.postimg.cc/mkw9z059/simple-icons-steam.png"
                  alt=""
                />
              </button>
              <button>
                <img
                  src="https://i.postimg.cc/MGCVh0Bn/cib-epic-games.png"
                  alt=""
                />
              </button>
            </div>
            <div>
              <h1>Space Marine</h1>
              <p className="Details">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
            <div className="DownImages">
              <div className="Images">
                <img src="https://i.postimg.cc/tJWVW6Vx/image-42.png" alt="" />
                <img src="https://i.postimg.cc/XJv8yRnZ/image-33.png" alt="" />
                <img src="https://i.postimg.cc/1tYK0vzv/image-1.png" alt="" />
              </div>
              <button>
                <img src="https://i.postimg.cc/508Bhf9F/like.png" alt="" />
                +96 Reviews
              </button>
            </div>
          </div>
          <div className="RightPart">
            <img src="https://i.postimg.cc/fR2QdNNX/image-47-1.png" alt="" />
          </div>
        </div>
      </div>
      <div className="Owned">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Header;
