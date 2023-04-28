import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const SendMessage = () => {
  const [value, setValue] = useState("");
  //console.log(value);
  const {currentUser} = UserAuth();
  
  const handleSendMessage = async (e) => {
    e.preventDefault();

    if(value.trim() === "") {
      alert("Enter Valid Message")
      return;
    }

    try {
      const {uid, displayName, photoURL} = currentUser;
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        img: photoURL,
        createdAt: serverTimestamp(),
        uid
      })
    } catch(error) {
      console.log(error);
    }
    console.log(value);
    setValue("");
  }

  return (
    <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
      <form onSubmit={handleSendMessage} className="px-4 containerWrap flex">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input w-full focus:outline-none bg-gray-100 rounded-r-none"
          type="text"
        />
        <button type="submit" className="w-auto bg-gray-500 text-white rounded-r-lg px-5 py-2">
          Send
        </button>
      </form>
     
    </div>
  );
};

export default SendMessage;
