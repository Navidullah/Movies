import React from "react";
import { Link } from "react-router-dom";
import { cardData } from "./CardData.jsx";

const Card = () => {
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString(); // Format the date as a string
  const timeString = currentDate.toLocaleTimeString(); // Format the time as a string
  return (
    <>
      {cardData.map((item) => (
        <div key={item.id} className="mt-[40px] flex items-center gap-[50px]">
          <div className="overflow-hidden cursor-pointer max-md:hidden">
            <img
              src={item.image}
              alt="image"
              className="object-cover w-[400px] h-[400px] hover-scale"
            />
          </div>
          <div className="  flex flex-col  bg-lightcriBlue p-4 rounded-md gap-3 w-full h-[400px]">
            <div>
              <span className="text-softTextColor">{dateString} </span>
              <span className="text-softTextColor">{timeString} </span>
              <span className="text-red-600 font-semibold font-sans">
                {item.catagory}
              </span>
            </div>
            <Link to="/">
              <Link
                to="/blogpage"
                className="text-3xl font-bold font-Roboto mb-3 max-lg:text-xl max-w-full"
              >
                {item.title}
              </Link>
            </Link>
            <p className="text-xl font-Montserrat text-softTextColor font-normal leading-8 max-lg:text-[18px] max-w-full max-sm:text-[16px]">
              {item.desc}
            </p>
            <Link to="/blogpage">
              <button className="p-3 w-max text-coral-white bg-criBlue hover:bg-blue-300">
                Read More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
