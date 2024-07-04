import React from "react";
import { Link } from "react-router-dom";

const Comment = () => {
  const status = "authenticated";
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-Poppins ">Comments</h1>
      {status === "authenticated" ? (
        <div className="flex flex-col justify-between gap-2">
          <textarea
            placeholder="write a comment here...."
            name=""
            id=""
            className="mt-8 max-w-[900px]  bg-lightcriBlue py-2 px-2 rounded-md text-[18px] text-slate-500"
          ></textarea>
          <button className="bg-criBlue text-coral-white p-1 w-[100px] text-lg hover:bg-green-500">
            Send
          </button>
        </div>
      ) : (
        <Link to="login">Login to write a comment</Link>
      )}
      <div className="mt-7">
        <div className="mt-7">
          <div className="flex items-center gap-5">
            <img
              src="/user.jpg"
              alt="user"
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
            <div className="flex flex-col gap-3">
              <span className="font-semibold ">Naveed</span>
              <span className="text-[14px]">17.06.2024</span>
            </div>
          </div>
        </div>
        <p className="text-[18px] mt-5">
          It was a nice blog. It was very informative. Thanks for sharing such
          useful content
        </p>
      </div>
      <div className="mt-7">
        <div className="mt-7">
          <div className="flex items-center gap-5">
            <img
              src="/user.jpg"
              alt="user"
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
            <div className="flex flex-col gap-3">
              <span className="font-semibold ">Naveed</span>
              <span className="text-[14px]">17.06.2024</span>
            </div>
          </div>
        </div>
        <p className="text-[18px] mt-5">
          It was a nice blog. It was very informative. Thanks for sharing such
          useful content
        </p>
      </div>
      <div className="mt-7">
        <div className="mt-7">
          <div className="flex items-center gap-5">
            <img
              src="/user.jpg"
              alt="user"
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
            <div className="flex flex-col gap-3">
              <span className="font-semibold ">Naveed</span>
              <span className="text-[14px]">17.06.2024</span>
            </div>
          </div>
        </div>
        <p className="text-[18px] mt-5">
          It was a nice blog. It was very informative. Thanks for sharing such
          useful content
        </p>
      </div>
    </div>
  );
};

export default Comment;
