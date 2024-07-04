import React from "react";

const Pagination = () => {
  return (
    <div className=" mt-8 flex justify-between items-center ">
      <button className="border-none flex items-center justify-center p-[16px] bg-coral-red text-coral-white  w-[100px] rounded-sm max-md:h-[20px]">
        Previous
      </button>
      <button className="border-none flex items-center justify-center p-[16px] bg-coral-red text-coral-white  w-[100px] rounded-sm max-md:h-[20px]">
        Next
      </button>
    </div>
  );
};

export default Pagination;
