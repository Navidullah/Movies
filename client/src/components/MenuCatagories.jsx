import React from "react";
import { Link } from "react-router-dom";

const MenuCatagories = () => {
  return (
    <div className="flex flex-wrap gap-6">
      <Link
        to="/blog?cat=style"
        className="px-8 py-3 text-[14px] rounded-md bg-[#57c4ff31]"
      >
        Style
      </Link>
      <Link
        to="/blog?cat=food"
        className="px-8 py-3 text-[14px] rounded-md  bg-[#5e4fff31]"
      >
        Food
      </Link>
      <Link
        to="/blog?cat=coding"
        className="px-8 py-3 text-[14px] rounded-md bg-[#7fb88133]"
      >
        Coding
      </Link>
      <Link
        to="/blog?cat=culture"
        className="px-8 py-3 text-[14px] rounded-md bg-[#ff795736]"
      >
        Culture
      </Link>
      <Link
        to="/blog?cat=travel"
        className="px-8 py-3 text-[14px] rounded-md bg-[#ffb04f45]"
      >
        Fashion
      </Link>
    </div>
  );
};

export default MenuCatagories;
