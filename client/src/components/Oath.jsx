import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "./Firebase.jsx";

const Oath = () => {
  const auth = getAuth(app);
  const handleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      console.log(resultsFromGoogle);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <button className="flex items-center" onClick={handleClick}>
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />{" "}
      <span>Continue with Google</span>
    </button>
  );
};

export default Oath;
