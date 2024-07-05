import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../../../Images/blog1.png";
import blog2 from '../../../Images/blog2.png'
import blog3 from '../../../Images/blog3.png'
import blog4 from '../../../Images/blog4.png'
import blog5 from '../../../Images/blog5.png'

export default function Blog() {
  return (
    <div className="blogWrapper my-20 ml-10">
      <h2 className="text-black font-extrabold text-5xl">Top Career Advice</h2>
      <p className="text-gray-500 py-5">Browse the latest career advices</p>
      <div className="blogCardWrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-16 justify-center"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        <div className="jobCardWrapper">
          <div class="max-w-[386px]
         md:max-w-[300px] lg:max-w-[386px] b border shadow-xl bg-white h-[35rem] rounded-3xl">
            <div className="">
              <img
                src={blog1}
                className=" rounded-3xl w-[23.9rem] h-[15rem] "
              />
              <div className="location-list text-center pb-2 pt-10 mt-[-1rem] rounded-b-lg
               bg-[#EFF5FB]">
                <ul className="list-none text-center">
                  <li className="text-gray-500 text-sm">June 8, 2024</li>
                  <li>
                    <Link
                      to="/loc"
                      className="text-black text-sm  hover:text-blue-500"
                    >
                      Jobs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <h2 className="text-black font-extrabold text-md  mx-8 w-[75%] my-3">
              How to find your first job out of college
            </h2>
            <p className="text-gray-500 text-md mx-5 pb-5">
              It’s keyword-optimized, industry-specified, full of achievements,
              backed by data, and double-checked by an expert. If it’s none of
              these thing...
            </p>

            <Link to="/page1" className="text-blue-500  text-lg font-bold ml-10 hover:text-[#002746] ">
              Read More
            </Link>
          </div>
        </div>
        <div className="jobCardWrapper">
          <div class=" max-w-[386px]
         md:max-w-[300px] lg:max-w-[386px] b border shadow-xl bg-white h-[35rem] rounded-3xl">
            <div className="">
              <img
                src={blog2}
                className=" rounded-3xl w-[23.9rem] h-[15rem] "
              />
              <div className="location-list text-center pb-2 pt-10 mt-[-1rem] rounded-b-lg bg-[#EFF5FB]">
                <ul className="list-none text-center">
                  <li className="text-gray-500 text-sm">June 8, 2024</li>
                  <li>
                    <Link
                      to="/#"
                      className="text-black text-sm hover:text-blue-500"
                    >
                      Workplace
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <h2 className="text-black font-extrabold text-md  mx-8 w-[75%] my-3">
              Mental health in the workplace
            </h2>
            <p className="text-gray-500 text-md mx-5 pb-5">
            But with more than 5 million jobs on Jobster, where do you even begin? Follow our tips and tricks below to help you find better, faster. Let the Perfect Job...
            </p>

            <Link to="/page2" className="text-blue-500  text-lg font-bold ml-10 hover:text-[#002746] ">
              Read More
            </Link>
          </div>
        </div>
        <div className="jobCardWrapper ">
          <div class="max-w-[386px
         md:max-w-[340px] lg:max-w-[386px] b border shadow-xl bg-white h-[35rem] rounded-3xl">
            <div className="">
              <img
                src={blog3}
                className=" rounded-3xl w-[23.9rem] h-[15rem] "
              />
              <div className="location-list text-center pb-2 pt-10 mt-[-1rem] rounded-b-lg
              bg-[#EFF5FB]">
                <ul className="list-none text-center">
                  <li className="text-gray-500 text-sm">May 24, 2024</li>
                  <li>
                    <Link
                      to="/loc"
                      className="text-black text-sm hover:text-blue-500"
                    >
                      Resume
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <h2 className="text-black font-extrabold text-md hover:text-blue-500 mx-8 w-[75%] my-3">
              <Link to="/#">Resume samples</Link>
            </h2>
            <p className="text-gray-500 text-md mx-5 pb-5">
            Your resume is perfect. It’s keyword-optimized, industry-specified, full of achievements, backed by data, and double-checked by an expert. If it’s none of these things, stop right here and learn how...
            </p>

            <Link to="/" className="text-blue-500  text-lg font-bold ml-10 hover:text-[#002746] ">
              Read More
            </Link>
          </div>
        </div>
        <div className="jobCardWrapper">
          <div class="max-w-[386px]
         md:max-w-[340px] lg:max-w-[386px] b border shadow-xl bg-white h-[35rem] rounded-3xl">
            <div className="">
              <img
                src={blog4}
                className=" rounded-3xl w-[23.9rem] h-[15rem] "
              />
              <div className="location-list text-center pb-2 pt-10 mt-[-1rem] rounded-b-lg bg-[#EFF5FB]">
                <ul className="list-none text-center">
                  <li className="text-gray-500 text-sm">June 2, 2024</li>
                  <li>
                    <Link
                      to="/loc"
                      className="text-black text-sm hover:text-blue-500"
                    >
                    Interview
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <h2 className="text-black font-extrabold text-md hover:text-blue-500 mx-8 w-[75%] my-3">
              <Link to="/#">100 top interview questions – be prepared</Link>
            </h2>
            <p className="text-gray-500 text-md mx-5 pb-5">
            Have realistic expectations Most designers will tell you that, as much as we all love to watch home design shows, their prevalence has done them a bit of a disservice....
            </p>

            <Link to="/" className="text-blue-500  text-lg font-bold ml-10 hover:text-[#002746] ">
              Read More
            </Link>
          </div>
        </div>
        <div className="jobCardWrapper">
          <div class="max-w-[386px]
         md:max-w-[340px] lg:max-w-[386px]  b border shadow-xl bg-white h-[35rem] rounded-3xl">
            <div className="">
              <img
                src={blog5}
                className=" rounded-3xl w-[23.9rem] h-[15rem] "
              />
              <div className="location-list text-center pb-2 pt-10 mt-[-1rem] rounded-b-lg bg-[#EFF5FB]">
                <ul className="list-none text-center">
                  <li className="text-gray-500 text-sm">June 2, 2024</li>
                  <li>
                    <Link
                      to="/loc"
                      className="text-black text-sm hover:text-blue-500"
                    >
                      Assessments
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <h2 className="text-black font-extrabold text-md hover:text-blue-500 mx-8 w-[75%] my-3">
              <Link to="/#">10 awesome free career self assessments</Link>
            </h2>
            <p className="text-gray-500 text-md mx-5 pb-5">
              IBut with more than 5 million jobs on Jobster, where do you even begin? Follow our tips and tricks below to help you find better, faster. Let the Perfect Job...
            </p>

            <Link to="/" className="text-blue-500  text-lg font-bold ml-10 hover:text-[#002746] ">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
