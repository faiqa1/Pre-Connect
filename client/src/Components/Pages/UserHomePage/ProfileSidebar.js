import React from "react";
import { Link } from "react-router-dom";
import pic from "../../../Images/profilepic.png";

export default function ProfileSidebar() {
  return (
    <div className="bg-blue w-full  h-[22rem] rounded-lg mx-5 my-8 flex-shrink-0 py-5 md:max-w-[15rem] lg:max-w-[20rem]   max-w-md">
        <div className="flex flex-col items-center w-full h-full mx-auto my-2">
          <div
            className="profileCircle w-32 h-32 rounded-full relative overflow-hidden"
          >
            <img src={pic} className="absolute w-full h-full object-cover " />
          </div>
          <div className="textWrapper text-center">
            <h3 className="text-white font-extrabold text-xl my-2">Becky Hill</h3>
            <p className="text-white text-md py-2 px-5">
              Node | React | MongoDB | Express | MERN Stack | Web Development | Docker | CI/CD Pipelines
            </p>
            <Link to='/profile'>
              <p className="text-white font-extrabold text-md underline decoration-[#002746] hover:decoration-[#fff]">View Profile</p>
            </Link>
          </div>
        </div>
    </div>
  );
}
