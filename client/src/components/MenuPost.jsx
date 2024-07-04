import React from "react";
import { Link } from "react-router-dom";
import { cardData } from "./CardData.jsx";

const MenuPost = ({ withImage }) => {
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString(); // Format the date as a string
  const timeString = currentDate.toLocaleTimeString(); // Format the time as a string
  return (
    <>
      {cardData.map((item) => (
        <div
          key={item.id}
          className="mt-[40px] flex items-center gap-[50px] max-md:flex-col "
        >
          {withImage && (
            <div className="overflow-hidden cursor-pointer">
              <img
                src={item.image}
                alt="image"
                className="object-cover w-[500px] h-[400px] hover-scale max-md:w-full max-md:h-full"
              />
            </div>
          )}
          <div className="flex-4">
            <span
              className={`text-[12px] px-[8px] py-[3px] text-coral-white rounded-xl flex items-center justify-center w-max ${item.bgColor}`}
            >
              {item.catagory}
            </span>
            <h3 className="mt-4 text-xl font-normal text-softTextColor">
              {item.title}
            </h3>
            <div className="text-[12px]">
              <span>{item.auther} </span>
              <span className="text-gray-500"> {dateString}</span>
              <span className="text-gray-500"> {timeString}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuPost;
