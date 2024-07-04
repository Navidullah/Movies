import { Link } from "react-router-dom";
import React from "react";

const CatagoryList = () => {
  return (
    <div className=" max-container max-md:px-4">
      <h1 className="title mt-10 mb-10 text-3xl font-semibold font-sans">
        Popular Catagories
      </h1>
      <div className="catagories flex flex-wrap justify-between gap-[20px]">
        <Link
          to="/blog?cat=style"
          className=" flex items-center justify-center w-[15%] h-[60px] rounded-md gap-[10px] capitalize bg-[#57c4ff31] max-md:w-[45%] max-lg:w-[25%]"
        >
          <img
            src="/style.png"
            alt="image"
            width={32}
            height={32}
            className=" w-[32px] h-[32px] rounded-full"
          />
          style
        </Link>
        <Link
          to="/blog?cat=travel"
          className=" flex items-center justify-center w-[15%] h-[60px] rounded-md gap-[10px] capitalize bg-[#da85c731] max-md:w-[45%] max-lg:w-[25%]"
        >
          <img
            src="/travel.png"
            alt="image"
            width={32}
            height={32}
            className="style  w-[32px] h-[32px] rounded-full"
          />
          travel
        </Link>
        <Link
          to="/blog?cat=coding"
          className=" flex items-center justify-center w-[15%] h-[60px] rounded-md gap-[10px] capitalize bg-[#7fb88133] max-md:w-[45%] max-lg:w-[25%]"
        >
          <img
            src="/coding.png"
            alt="image"
            width={32}
            height={32}
            className="style w-[32px] h-[32px] rounded-full"
          />
          coding
        </Link>
        <Link
          to="/blog?cat=culture"
          className=" flex items-center justify-center w-[15%] h-[60px] rounded-md gap-[10px] capitalize bg-[#ff795736] max-md:w-[45%] max-lg:w-[25%]"
        >
          <img
            src="/culture.png"
            alt="image"
            width={32}
            height={32}
            className="style w-[32px] h-[32px] rounded-full"
          />
          culture
        </Link>
        <Link
          to="/blog?cat=fashion"
          className=" flex items-center justify-center w-[15%] h-[60px] rounded-md gap-[10px] capitalize bg-[#ffb04f45] max-md:w-[45%] max-lg:w-[25%]"
        >
          <img
            src="/fashion.png"
            alt="image"
            width={32}
            height={32}
            className="style w-[32px] h-[32px] rounded-full"
          />
          fashion
        </Link>
        <Link
          to="/blog?cat=food"
          className=" flex items-center justify-center w-[15%] h-[60px] rounded-md gap-[10px] capitalize bg-[#5e4fff31] max-md:w-[45%] max-lg:w-[25%]"
        >
          <img
            src="/food.png"
            alt="image"
            width={32}
            height={32}
            className="style w-[32px] h-[32px] rounded-full"
          />
          food
        </Link>
      </div>
    </div>
  );
};

export default CatagoryList;
