import React from "react";
import Card from "./Card";
import Pagination from "./Pagination";

const CardList = () => {
  return (
    <div className=" max-lg:px-3">
      <h1 className="font-sans text-3xl font-semibold mt-[40px]">
        Recent Posts
      </h1>
      <div>
        <Card />
        <Pagination />
      </div>
    </div>
  );
};

export default CardList;
