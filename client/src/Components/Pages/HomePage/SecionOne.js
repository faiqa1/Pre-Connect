import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import laptop from '../../../Images/manOnLaptop.jpeg'
import { Link } from "react-router-dom";

export default function SecionOne() {
  return (
    <>
      <div className="bg-blue h-[420px] w-full">
      <div className="flex  justify-center ">
        <div className="wrapper w-[800px]">
          <h1 className="text-white text-3xl pt-8 pb-2 ml-[5%] font-bold">
            Ignite Your Tech Career Today
          </h1>
          <p className="text-white text-xl pt-8 pb-2 ml-[5%] ">
            Join us and ignite your tech journey to reach new heights of
            success. Preconnect will help you to reach your potentials.
          </p>
          <button className="text-white text-lg ml-[4%] mt-4 font-bold py-4 px-2
           underline decoration-[#0969c3] hover:decoration-[#fff]
           rounded-lg bg-[#0969c3]">
            <Link to="/signup" className="mr-5">Get Started</Link>
            <FaArrowRight className="mt-[-1.4rem] ml-[7rem]" />
          </button>
        </div>
        <div className="bannerImage flex ">
        <img className="w-[80%] h-full object-cover opacity-17" src={laptop} />
        </div>
        </div>
      </div>
     
    </>
  );
}
