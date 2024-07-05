import React from "react";
import newsletter from "../../../Images/newsletter.png";
export default function () {
  return (
    <div
      className="newsWrapper my-10 w-10/12 mx-10
    max-h-[40rem] md:max-h-[20rem] lg:max-h-[40rem] py-5 "
    >
      <div className="newsLetterHeading text-center">
        <h2 className="text-black font-extrabold text-4xl">Stay up to date</h2>
        <p className="text-gray-500 py-5">
          Subscribe to our newsletter to receive our weekly feed.
        </p>
      </div>
      <div className="flex justify-center">
        <img src={newsletter} className="w-[30%]  " />
      </div>
      <div className="flex justify-center">
        <form>
          <input
            type="email"
            name="email"
            placeholder="Email" 
            className=" text-gray-500 border  rounded-[25rem] px-5 py-4 w-[28rem] bg-white"
          />
          <button className="bg-[#0969c3] text-white font-bold rounded-[25rem] py-4 px-6 ml-[-8rem] w-[8rem]  hover:bg-[#002746]">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
