import React from "react";
import "./Main.scss";
import { Downloads } from "./Downloads/Downloads";
import { Games } from "./Games/Games";
import { Header } from "./Header/Header";
import { Search } from "./Search/Search";

export function Main() {
  return (
    <div className="Main">
      <Search />
      <Header />
      <Games />
      {/* <Downloads /> */}
    </div>
  );
}

export default Main;
