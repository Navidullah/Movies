import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { GoLinkExternal } from "react-icons/go";
import { CiVideoOn } from "react-icons/ci";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className="max-container ">
      <input
        type="text"
        placeholder="Title"
        className="p-[50px] text-4xl border-none outline-none bg-lightcriBlue w-full mt-4"
      />
      <div className="editor relative flex gap-[20px] mt-4 mb-4">
        <button onClick={() => setOpen(!open)}>
          <CiCirclePlus
            className={`w-[36px] h-[36px] rounded-full transition-transform ${
              open ? "rotate-45" : "rotate-0"
            }`}
          />
        </button>
        {open && (
          <div
            className={`transition-all duration-1000 ease-in-out ${
              open ? "max-h-[100px] opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden flex gap-[20px] w-full`}
          >
            <button>
              <CiImageOn className="w-[36px] h-[36px] rounded-full" />
            </button>
            <button>
              <GoLinkExternal className="w-[36px] h-[36px] rounded-full" />
            </button>
            <button>
              <CiVideoOn className="w-[36px] h-[36px] rounded-full" />
            </button>
          </div>
        )}
      </div>
      <ReactQuill
        value={value}
        onChange={setValue}
        placeholder="Tell Your Story..."
        className=" w-full min-h-screen"
      />
      <button className="absolute top-[100px] right-[20px] border-none px-[20px] py-[10px] bg-green-500 rounded-lg">
        Publish
      </button>
    </div>
  );
};

export default Write;
