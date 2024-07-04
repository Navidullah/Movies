import { Link } from "react-router-dom";
import { useState } from "react";
import { BsClipboardPulse, BsJustify } from "react-icons/bs";
import { IoMoonOutline } from "react-icons/io5";
import AuthLinks from "./AuthLinks";
//import { MdOutlineWbSunny } from "react-icons/md";
//import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className=" bg-coral-blue font-Roboto max-[1024px]:max-w-[1024px]">
        <nav className=" max-container flex  items-center justify-between py-5 max-[1024px]:px-3 ">
          <Link
            to="/"
            className="flex items-center text-3xl text-coral-white max-md:text-2xl"
          >
            <BsClipboardPulse />
            <span>ThePulse</span>
          </Link>
          <div className="flex items-center gap-5 text-xl text-coral-white max-[1024px]:hidden">
            <IoMoonOutline className="cursor-pointer" />
            <Link to="/">HomePage</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/write">Write</Link>
            <AuthLinks />
          </div>
          <BsJustify
            size={35}
            className="hidden max-[1024px]:flex cursor-pointer text-coral-white"
            onClick={() => setOpen((prev) => !prev)}
          />
        </nav>
      </header>

      {open && (
        <>
          <div className=" hidden  max-[1024px]:flex flex-col items-center  text-l font-semibold text-slate-gray">
            <Link
              href="/"
              className="setcol text-[18px]  font-normal text-center py-2  hover:bg-lightcriBlue w-full border-b "
              onClick={() => setOpen(false)}
            >
              HomePage
            </Link>
            <Link
              href="/contact"
              className="setcol text-[18px] font-normal  text-center py-2  hover:bg-lightcriBlue w-full border-b "
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/write"
              className="setcol text-[18px] font-normal text-center py-2  hover:bg-lightcriBlue w-full border-b "
              onClick={() => setOpen(false)}
            >
              Write
            </Link>
            <AuthLinks />
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
