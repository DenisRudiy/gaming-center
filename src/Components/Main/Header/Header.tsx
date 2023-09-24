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
        <div className="Games">
          <div className="LogoBlock">
            <img src="https://i.postimg.cc/cCzdfg2p/image-46-1.png" alt="" />
            <div>
              <p className="Name">LEAP</p>
              <p className="Info">Ps5 & xbox & PC</p>
            </div>
          </div>

          <button>
            <img src="https://i.postimg.cc/zDQLCVCD/arrow-down.png" alt="" />
          </button>
        </div>
        <div className="Games">
          <div className="LogoBlock">
            <img src="https://i.postimg.cc/h4ZDk6v2/image-26.png" alt="" />
            <div>
              <p className="Name">Space Marine</p>
              <p className="Info">Ps5 & xbox & PC</p>
            </div>
          </div>
          <button>
            <img src="https://i.postimg.cc/zDQLCVCD/arrow-down.png" alt="" />
          </button>
        </div>
        <div className="Games">
          <div className="LogoBlock">
            <img
              src="https://i.postimg.cc/VLSfmgbm/wp1811273-the-last-of-us-wallpapers-1.png"
              alt=""
            />
            <div>
              <p className="Name">Red for dead</p>
              <p className="Info">Ps5 & xbox & PC</p>
            </div>
          </div>
          <button>
            <img src="https://i.postimg.cc/zDQLCVCD/arrow-down.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
