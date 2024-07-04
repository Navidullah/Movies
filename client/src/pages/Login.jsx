import React from "react";

import Oath from "../components/Oath.jsx";

const Login = () => {
  return (
    <div className="max-container flex items-center justify-center mt-8 ">
      <div className="flex flex-col py-[150px] px-[200px] gap-8 bg-softBg rounded-md max-md:py-[50px] max-md:px-[100px] max-sm:p-[30px] max-sm:font-extralight max-sm:text-[14px]">
        <div className="p-[20px] rounded-md border-none font-bold cursor-pointer flex items-center justify-center bg-green-500">
          <Oath />
        </div>
        <div className="p-[20px] rounded-md border-none font-bold cursor-pointer flex items-center justify-center bg-blue-400">
          Sign in with Github
        </div>
        <div className="p-[20px] rounded-md border-none font-bold cursor-pointer flex items-center justify-center bg-yellow-500">
          Sign in with facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
