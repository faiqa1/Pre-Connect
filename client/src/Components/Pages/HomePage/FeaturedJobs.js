import React from "react";
import { FaConnectdevelop } from "react-icons/fa6";
import game from "../../../Images/gameware.png";
import { Link } from "react-router-dom";
import { FaGlobeAmericas } from "react-icons/fa";
import logo1 from "../../../Images/companylogo1.png";
import logo2 from "../../../Images/company-logo2.png";
import logo3 from "../../../Images/company-logo3.png";
import logo4 from "../../../Images/company-logo4.png";
import logo5 from "../../../Images/company-logo5.png";
import { BiSolidPieChartAlt2 } from "react-icons/bi";
import { FaRegComments } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa6";

export default function FeaturedJobs() {
  return (
    <div
      className="SectionWrapper w-full bg-pink mt-[5%] 
    max-h-[85rem] md:max-h-[70rem] lg:max-h-[85rem] pb-10"
    >
      <h2 className="text-black text-4xl pt-10 pb-4 ml-16  font-extrabold">
        Featured Job Offers
      </h2>
      <p className="text-black w-[45%] font-normal  ml-16 pb-8">
        Search your career opportunity 18,000 jobs
      </p>

      <div
        className="jobGridWrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mx-16 justify-center"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
      >
        <div className="jobCardWrapper py-4 ">
          <Link>
            <div className="p-6 b border shadow-xl bg-white h-[17rem] rounded-3xl  max-w-[380px] md:max-w-[306px] lg:max-w-[380px]">
              <div className="mx-5">
                <div className="cardHeadingWrapper flex ho hoverCardHeading">
                  <div className="bg-[#EFF5FB] chartline rounded-md px-[0.3rem] py-[0.3rem]">
                    <FaChartLine className="faicon" />
                  </div>
                  <h2 className="text-gray-400 text-normal pl-[0.5rem]">
                    Finance
                  </h2>
                </div>
                <h3 className="text-black font-bold texl-xl pt-5">
                  Financial Analyst
                </h3>
                <div className="location-list text-center pb-2 pt-4">
                  <ul className="list-none flex flex-wrap ">
                    <li>
                      <Link to="/loc" className="text-black font-semibold pr-5">
                        San Diego, CA
                      </Link>
                    </li>
                    <li className="font-normal text-gray-600 pl-7">
                      Full time
                    </li>
                  </ul>
                </div>
                <div className="cardFooter flex justify-between mt-5">
                  <div className="cardFoooterText pt-2">
                    <p className=" font-thin text-gray-400 pb-1">
                      June 8, 2024
                    </p>
                    <h3 className=" text-black font-medium">Gameware</h3>
                  </div>
                  <div className="companyIcon">
                    <img
                      src={game}
                      className="rounded-xl w-20"
                      alt="Company Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="jobCardWrapper py-4 ">
          <Link>
            <div className="p-6 b border shadow-xl bg-white h-[17rem] rounded-3xl  max-w-[380px] md:max-w-[306px] lg:max-w-[380px]">
              <div className="mx-5">
                <div className="cardHeadingWrapper flex ho hoverCardHeading">
                  <div className="bg-[#EFF5FB] chartline rounded-md px-[0.3rem] py-[0.3rem]">
                    <BiSolidPieChartAlt2 className="faicon" />
                  </div>
                  <h2 className="text-gray-400 text-normal pl-[0.5rem]">
                    Business Development
                  </h2>
                </div>
                <h3 className="text-black font-bold texl-xl pt-5">
                  Technical Writer
                </h3>
                <div className="location-list text-center pb-2 pt-4">
                  <ul className="list-none flex flex-wrap ">
                    <li>
                      <Link to="/loc" className="text-black font-semibold pr-5">
                        Los Angeles, CA
                      </Link>
                    </li>
                    <li className="font-normal text-gray-600 pl-7">
                      Part time
                    </li>
                  </ul>
                </div>
                <div className="cardFooter flex justify-between mt-5">
                  <div className="cardFoooterText pt-2">
                    <p className=" font-thin text-gray-400 pb-1">
                      June 5, 2024
                    </p>
                    <h3 className=" text-black font-medium">Crafgenics</h3>
                  </div>
                  <div className="companyIcon">
                    <img
                      src={logo1}
                      className="rounded-xl w-20"
                      alt="Company Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="jobCardWrapper py-4 ">
          <Link>
            <div className="p-6 b border shadow-xl bg-white h-[17rem] rounded-3xl  max-w-[380px] md:max-w-[306px] lg:max-w-[380px]">
              <div className="mx-5">
                <div className="cardHeadingWrapper flex ho hoverCardHeading">
                  <div className="bg-[#EFF5FB] chartline rounded-md px-[0.3rem] py-[0.3rem]">
                    <FaRegComments className="faicon" />
                  </div>
                  <h2 className="text-gray-400 text-normal pl-[0.5rem]">
                    Customer Services
                  </h2>
                </div>
                <h3 className="text-black font-bold texl-xl pt-5">
                  Technical Support Engineer
                </h3>
                <div className="location-list text-center pb-2 pt-4">
                  <ul className="list-none flex flex-wrap ">
                    <li>
                      <Link to="/loc" className="text-black font-semibold pr-5">
                        San Diego, CA
                      </Link>
                    </li>
                    <li className="font-normal text-gray-600 pl-7">
                      Full time
                    </li>
                  </ul>
                </div>
                <div className="cardFooter flex justify-between mt-5">
                  <div className="cardFoooterText pt-2">
                    <p className=" font-thin text-gray-400 pb-1">May 8, 2024</p>
                    <h3 className=" text-black font-medium">
                      Illuminate Studio
                    </h3>
                  </div>
                  <div className="companyIcon">
                    <img
                      src={logo2}
                      className="rounded-xl w-20"
                      alt="Company Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="jobCardWrapper py-4 ">
          <Link>
            <div className="p-6 b border shadow-xl bg-white h-[17rem] rounded-3xl  max-w-[380px] md:max-w-[306px] lg:max-w-[380px]">
              <div className="mx-5">
                <div className="cardHeadingWrapper flex ho hoverCardHeading">
                  <div className="bg-[#EFF5FB] chartline rounded-md px-[0.3rem] py-[0.3rem]">
                    <FaRegAddressCard className="faicon" />
                  </div>
                  <h2 className="text-gray-400 text-normal pl-[0.5rem]">
                    Human Resources
                  </h2>
                </div>
                <h3 className="text-black font-bold texl-xl pt-5">
                  Human Resource Manager
                </h3>
                <div className="location-list text-center pb-2 pt-4">
                  <ul className="list-none flex flex-wrap ">
                    <li>
                      <Link to="/loc" className="text-black font-semibold pr-5">
                        San Diego, CA
                      </Link>
                    </li>
                    <li className="font-normal text-gray-600 pl-7">
                      Part Time
                    </li>
                  </ul>
                </div>
                <div className="cardFooter flex justify-between mt-5">
                  <div className="cardFoooterText pt-2">
                    <p className=" font-thin text-gray-400 pb-1">
                      June 1, 2024
                    </p>
                    <h3 className=" text-black font-medium">DataRes</h3>
                  </div>
                  <div className="companyIcon">
                    <img
                      src={logo3}
                      className="rounded-xl w-20"
                      alt="Company Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="jobCardWrapper py-4 ">
          <Link>
            <div className="p-6 b border shadow-xl bg-white h-[17rem] rounded-3xl  max-w-[380px] md:max-w-[306px] lg:max-w-[380px]">
              <div className="mx-5">
                <div className="cardHeadingWrapper flex ho hoverCardHeading">
                  <div className="bg-[#EFF5FB] chartline rounded-md px-[0.3rem] py-[0.3rem]">
                    <FaRegCalendar className="faicon" />
                  </div>
                  <h2 className="text-gray-400 text-normal pl-[0.5rem]">
                    Project Management
                  </h2>
                </div>
                <h3 className="text-black font-bold texl-xl pt-5">
                  Software Engineering Team Lead
                </h3>
                <div className="location-list text-center pb-2 pt-4">
                  <ul className="list-none flex flex-wrap ">
                    <li>
                      <Link to="/loc" className="text-black font-semibold pr-5">
                        San Diego, CA
                      </Link>
                    </li>
                    <li className="font-normal text-gray-600 pl-7">
                      Internship
                    </li>
                  </ul>
                </div>
                <div className="cardFooter flex justify-between mt-5">
                  <div className="cardFoooterText pt-2">
                    <p className=" font-thin text-gray-400 pb-1">
                      June 3, 2024
                    </p>
                    <h3 className=" text-black font-medium">Syspresoft</h3>
                  </div>
                  <div className="companyIcon">
                    <img
                      src={logo4}
                      className="rounded-xl w-20"
                      alt="Company Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="jobCardWrapper py-4 ">
          <Link>
            <div className="p-6 b border shadow-xl bg-white h-[17rem] rounded-3xl  max-w-[380px] md:max-w-[306px] lg:max-w-[380px]">
              <div className="mx-5">
                <div className="cardHeadingWrapper flex ho hoverCardHeading">
                  <div className="bg-[#EFF5FB] chartline rounded-md px-[0.3rem] py-[0.3rem]">
                    <FaTerminal className="faicon" />
                  </div>
                  <h2 className="text-gray-400 text-normal pl-[0.5rem]">
                    Software Engineering
                  </h2>
                </div>
                <h3 className="text-black font-bold texl-xl pt-5">
                  Full Stack Developer
                </h3>
                <div className="location-list text-center pb-2 pt-4">
                  <ul className="list-none flex flex-wrap ">
                    <li>
                      <Link to="/loc" className="text-black font-semibold pr-5">
                        San Diego, CA
                      </Link>
                    </li>
                    <li className="font-normal text-gray-600 pl-7">
                      Full time
                    </li>
                  </ul>
                </div>
                <div className="cardFooter flex justify-between mt-5">
                  <div className="cardFoooterText pt-2">
                    <p className=" font-thin text-gray-400 pb-1">
                      June 7, 2024
                    </p>
                    <h3 className=" text-black font-medium">Artistre Studio</h3>
                  </div>
                  <div className="companyIcon">
                    <img
                      src={logo5}
                      className="rounded-xl w-20"
                      alt="Company Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="jobCardWrapper py-4 ">
          <Link>
            <div className="p-6 b border shadow-xl bg-white h-[17rem] rounded-3xl  max-w-[380px] md:max-w-[306px] lg:max-w-[380px]">
              <div className="mx-5">
                <div className="cardHeadingWrapper flex ho hoverCardHeading">
                  <div className="bg-[#EFF5FB] chartline rounded-md px-[0.3rem] py-[0.3rem]">
                    <FaChartLine className="faicon" />
                  </div>
                  <h2 className="text-gray-400 text-normal pl-[0.5rem]">
                    Finance
                  </h2>
                </div>
                <h3 className="text-black font-bold texl-xl pt-5">
                  Financial Analyst
                </h3>
                <div className="location-list text-center pb-2 pt-4">
                  <ul className="list-none flex flex-wrap ">
                    <li>
                      <Link to="/loc" className="text-black font-semibold pr-5">
                        San Diego, CA
                      </Link>
                    </li>
                    <li className="font-normal text-gray-600 pl-7">
                      Full time
                    </li>
                  </ul>
                </div>
                <div className="cardFooter flex justify-between mt-5">
                  <div className="cardFoooterText pt-2">
                    <p className=" font-thin text-gray-400 pb-1">
                      June 8, 2024
                    </p>
                    <h3 className=" text-black font-medium">Gameware</h3>
                  </div>
                  <div className="companyIcon">
                    <img
                      src={game}
                      className="rounded-xl w-20"
                      alt="Company Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="btnjoboffer mt-[5%] ml-[7%]">
        <button>
          <Link
            to="/alljobs"
            className="text-white font-extrabold 
            bg-[#0969c3] px-8 py-3 rounded-3xl
            hover:bg-[#002746] hover:pr-[3rem]"
          >
            All Job Offers
          </Link>
        </button>
      </div>
    </div>
  );
}
