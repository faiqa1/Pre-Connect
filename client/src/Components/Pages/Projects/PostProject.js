import React from "react";
import { Link } from "react-router-dom";

export default function PostProject() {
  return (
    <div>
      <div
        className="createjobWrapper float-left mx-5 bg-blue w-[15rem]
      h-5rem rounded-2xl h-[18rem] py-10"
      >
        <Link to='/projectform'>
        <h3 className="text-white font-bold px-5 py-4 underline decoration-[#002746] hover:decoration-[#fff]">Post a Project</h3>
        </Link>
        <h3 className="text-white font-bold px-5 py-4 underline decoration-[#002746] hover:decoration-[#fff]">
          Interview Preparation
        </h3>
        <h3 className="text-white font-bold px-5 py-4 underline decoration-[#002746] hover:decoration-[#fff]">Job Seeker Guidance</h3>
      </div>
    </div>
  );
}
