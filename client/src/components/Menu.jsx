import { Link } from "react-router-dom";
import React from "react";
import MenuPost from "./MenuPost.jsx";
import MenuCatagories from "./MenuCatagories.jsx";
//import MenuCatagories from "./MenuCatagories.jsx";

const Menu = () => {
  return (
    <div className="flex-2 mt-8 max-[1080px]:hidden">
      <h1 className="text-3xl font-semibold font-Roboto">Most Popular</h1>
      <MenuPost withImage={false} />
    </div>
  );
};

export default Menu;
