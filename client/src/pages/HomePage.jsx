import React from "react";
import Featured from "../components/Featured.jsx";
import CatagoryList from "../components/CatagoryList.jsx";
import CardList from "../components/CardList.jsx";

const HomePage = () => {
  return (
    <div className="max-container max-[1024px]:max-w-[1024px]">
      <Featured />
      <CatagoryList />
      <CardList />
    </div>
  );
};

export default HomePage;
HomePage;
