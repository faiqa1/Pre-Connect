import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../../Images/profilepic.png";

export default function MapPost() {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handlePostComment = (e) => {
    e.preventDefault();
    // Handle comment post logic here
    console.log("Posted comment:", comment);
    setComment(""); // Clear the comment field
  };
  return (
    <div className="section1wrapper  md:max-w-[50rem] lg:max-w-[60rem]  w-full max-w-md flex flex-col mx-auto h-auto bg-lightblue my-5 p-5 rounded-lg">
      <div className="flex">
        <div className=" mb-3">
          <img
            src={img}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        <div className="postHeading flex flex-col">
          <h3 className="text-black font-extrabold text-xl">Becky Hill</h3>
          <p className="text-black text-md w-full">
            Node | React | MongoDB | Express | MERN Stack | Web Development |
            Docker | CI/CD Pipelines
          </p>
          <p className=" text-gray-500">Just now</p>
        </div>
      </div>

      <div className="PostContent">
        <p className="text-black text-md py-2 px-4 w-full leading-8">
          📣<b>!!Hiring Alert!!</b>📣 <br />
          <b>Job Title</b> Full Stack Developer <br />
          <b>Job Typr</b>Full Time (Onsite) <br />
          <b>Experience</b>3-5 years <br />
          <b>Location:</b>333 J1, Block, Johar Town<br/> - Programming Languages:
          Proficiency in Python, .Net, and Node as a plus
          <br />
          - Backend Frameworks: Django, Flask, or FastAPI.
          <br />
          - Databases: SQL (e.g., PostgreSQL, MySQL) and NoSQL (e.g., MongoDB,
          Dynamo, Redis).
          <br />
          - API Development: RESTful APIs, WebSockets as a plus
          <br />
          - Version Control: Git
          <br />
          - Cloud Platforms: Experience with cloud platforms like AWS, Microsoft
          Azure, or Google Cloud Platform.
          <br />
          - Containerization: (Docker, Kubernetes) both are a plus.
          <br />- Collaboration: Ability to collaborate effectively with
          frontend teams and familiarity with frontend technologies.
          <br />
          <b>Interested candidate can send their resume info@thedevport.com</b>
        </p>
      </div>
      <div className="options flex justify-startmt-3">
        <Link to="/#" className="text-blue-600 hover:underline">
          Like
        </Link>
        <Link to="/#" className="text-blue-600 hover:underline px-4">
          Comment
        </Link>
        <Link to="/#" className="text-blue-600 hover:underline">
          Share
        </Link>
      </div>
      <div className="mt-3">
        <form onSubmit={handlePostComment}>
          <input
            type="text"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Add a comment"
            className="rounded-md focus:outline-none border-gray-300 bg-white border-none p-3 mx-2  text-black w-1/2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white  px-6 py-2 rounded-lg mt-2"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}
