import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../../../Images/blog1.png";
import blog2 from "../../../Images/blog2.png";
import blog3 from "../../../Images/blog3.png";
import blog4 from "../../../Images/blog4.png";
import blog5 from "../../../Images/blog5.png";

export default function BlogPage2() {
  return (
    <>
      <div className="blogPage1 my-20 ml-[10rem]">
        <h2 className="text-black font-extrabold text-5xl w-[55%] ">
        Mental health in the workplace
        </h2>
        <p className="text-gray-500 text-md py-5 w-[60%]">
        But with more than 5 million jobs on Jobster, where do you even begin? Follow our tips and tricks below to help you find better, faster. Let the Perfect Job...
        </p>
        <div className="location-list text-center pb-2 ml-[25rem]">
          <ul className="list-none text-center">
            <li>
              Posted in
              <Link
                to="/loc"
                className="text-blue-600 text-sm  hover:text-blue-500"
              >
                Workplace
              </Link>
            </li>
            <li className="text-gray-500 text-sm">June 2, 2024</li>
          </ul>
        </div>
        <div>
          <img src={blog2} className="rounded-2xl w-[85%] h-[30rem]" />
        </div>
        <p className="text-gray-500 text-md py-5 w-[60%] mt-[5%]">
        But with more than 5 million jobs on Jobster, where do you even begin? Follow our tips and tricks below to help you find better, faster.
        </p>

        <div>
          <h2 className="text-black font-extrabold text-5xl w-[55%] my-[2rem]">
            Let the Perfect Job Find You
          </h2>
          <p className="text-gray-500 text-md py-5 w-[60%]">
            Your resume is perfect. It’s keyword-optimized, industry-specified,
            full of achievements, backed by data, and double-checked by an
            expert. If it’s none of these things, stop right here and learn how
            to get your resume ready for a job search. So you’re ready to find
            your next job. And Jobster career expert Vicki Salemi, who spent
            more than 15 years in corporate recruiting, says now is as good of a
            time as any to start looking for it. “Companies hire year-round,”
            she says. “You never know when the right position will open up.” A
            Jobster poll revealed that 90% of respondents are ready to reset
            their job search in September, whereas only 10% are willing to wait
            until the beginning of the new year. But with more than 5 million
            jobs on Jobster, where do you even begin? Follow our tips and tricks
            below to help you find better, faster.
          </p>
        </div>
      </div>
      <div className="blogCardWrapper flex flex-wrap ml-[10%]">
        <h2></h2>

        <div className="jobCardWrapper w-[23rem]">
          <div class="max-w-sm b border shadow-xl bg-white h-[35rem] rounded-3xl">
            <div className="">
              <img
                src={blog1}
                className=" rounded-3xl w-[22.97rem] h-[15rem] "
              />
              <div className="location-list text-center pb-2 pt-10 mt-[-1rem] rounded-b-lg
               bg-[#EFF5FB]">
                <ul className="list-none text-center">
                  <li className="text-gray-500 text-sm">June 8, 2024</li>
                  <li>
                    <Link
                      to="/#"
                      className="text-black text-sm  hover:text-blue-500"
                    >
                      Jobs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <h2 className="text-black font-extrabold text-md hover:text-blue-500 mx-8 w-[75%] my-3">
              <Link to="/page1">How to find your first job out of college</Link>
            </h2>
            <p className="text-gray-500 text-md mx-5 pb-5">
              It’s keyword-optimized, industry-specified, full of achievements,
              backed by data, and double-checked by an expert. If it’s none of
              these thing...
            </p>

            <Link to="/" className="text-blue-500  text-lg font-bold ml-10 hover:text-[#002746] ">
              Read More
            </Link>
          </div>
        </div>
        <div className="jobCardWrapper w-[23rem] mx-8">
          <div class="max-w-sm b border shadow-xl bg-white h-[35rem] rounded-3xl">
            <div className="">
              <img
                src={blog3}
                className=" rounded-3xl w-[22.97rem] h-[15rem] "
              />
              <div
                className="location-list text-center pb-2 pt-10 mt-[-1rem] rounded-b-lg
              bg-[#EFF5FB]"
              >
                <ul className="list-none text-center">
                  <li className="text-gray-500 text-sm">May 24, 2024</li>
                  <li>
                    <Link
                      to="/#"
                      className="text-black text-sm hover:text-blue-500"
                    >
                      Resume
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <h2 className="text-black font-extrabold text-md hover:text-blue-500 mx-8 w-[75%] my-3">
              <Link to="/page3">Resume samples</Link>
            </h2>
            <p className="text-gray-500 text-md mx-5 pb-5">
              Your resume is perfect. It’s keyword-optimized,
              industry-specified, full of achievements, backed by data, and
              double-checked by an expert. If it’s none of these things, stop
              right here and learn how...
            </p>

            <Link
              to="/"
              className="text-blue-500  text-lg font-bold ml-10 hover:text-[#002746] "
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="jobCardWrapper w-[23rem]">
          <div class="max-w-sm b border shadow-xl bg-white h-[35rem] rounded-3xl">
            <div className="">
              <img
                src={blog4}
                className=" rounded-3xl w-[22.97rem] h-[15rem] "
              />
              <div className="location-list text-center pb-2 pt-10 mt-[-1rem] rounded-b-lg bg-[#EFF5FB]">
                <ul className="list-none text-center">
                  <li className="text-gray-500 text-sm">June 2, 2024</li>
                  <li>
                    <Link
                      to="/#"
                      className="text-black text-sm hover:text-blue-500"
                    >
                      Interview
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <h2 className="text-black font-extrabold text-md hover:text-blue-500 mx-8 w-[75%] my-3">
              <Link to="/page4">100 top interview questions – be prepared</Link>
            </h2>
            <p className="text-gray-500 text-md mx-5 pb-5">
              Have realistic expectations Most designers will tell you that, as
              much as we all love to watch home design shows, their prevalence
              has done them a bit of a disservice....
            </p>

            <Link
              to="/"
              className="text-blue-500  text-lg font-bold ml-10 hover:text-[#002746] "
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
