import React, { useState } from "react";
import "./Games.scss";

export function Games() {
  return (
    <div className="Games">
      <div className="List">
        <div className="Block">
          <div className="Overlay">
            <div className="BtnsSection">
              <button className="Play">
                <img src="https://i.postimg.cc/zD7qFRrs/play.png" alt="" />
              </button>
              <button className="Buy">
                <img src="https://i.postimg.cc/hv2gDNsD/bag-2.png" alt="" />
              </button>
            </div>
            <h2>Baldurs Gate 3</h2>
            <div className="InfoSection">
              <p>
                Endings for Baldur's Gate 3 covers all possible conclusions to
                the game determined by the player's influence on the Forgotten
                Realms.
              </p>
            </div>
          </div>
          <img src="https://i.ibb.co/zPD7HGB/image-1-2.png" alt="" />
        </div>
        <div className="Block">
          <div className="Overlay">
            <div className="BtnsSection">
              <button className="Play">
                <img src="https://i.postimg.cc/zD7qFRrs/play.png" alt="" />
              </button>
              <button className="Buy">
                <img src="https://i.postimg.cc/hv2gDNsD/bag-2.png" alt="" />
              </button>
            </div>
            <h2>Elden Ring</h2>
            <div className="InfoSection">
              <p>
                Endings for Elden Ring cover the possible conclusions of the
                game, determined by the player and their influence on The Lands
                Between's denizens.
              </p>
            </div>
          </div>
          <img src="https://i.ibb.co/tH6b4gd/image-1-3.png" alt="" />
        </div>
        <div className="Block">
          <div className="Overlay">
            <div className="BtnsSection">
              <button className="Play">
                <img src="https://i.postimg.cc/zD7qFRrs/play.png" alt="" />
              </button>
              <button className="Buy">
                <img src="https://i.postimg.cc/hv2gDNsD/bag-2.png" alt="" />
              </button>
            </div>
            <h2>Valorant</h2>
            <div className="InfoSection">
              <p>
                Valorant is a team-based first-person tactical hero shooter set
                in the near future.
              </p>
            </div>
          </div>
          <img src="https://i.ibb.co/PtyPKYC/image-25.png" alt="" />
        </div>
        <div className="Block">
          <div className="Overlay">
            <div className="BtnsSection">
              <button className="Play">
                <img src="https://i.postimg.cc/zD7qFRrs/play.png" alt="" />
              </button>
              <button className="Buy">
                <img src="https://i.postimg.cc/hv2gDNsD/bag-2.png" alt="" />
              </button>
            </div>
            <h2>Warzone 2.0</h2>
            <div className="InfoSection">
              <p>
                Similar to its predecessor, in Warzone 2.0's primary game mode,
                Battle Royale, players compete in a continuously shrinking map
                to be the last player remaining.
              </p>
            </div>
          </div>
          <img src="https://i.ibb.co/16xDdPX/image-1-1.png" alt="" />
        </div>
      </div>
      <div className="Promo"></div>
    </div>
  );
}
export default Games;
