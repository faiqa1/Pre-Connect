import React from 'react'
import { Link } from "react-router-dom";
import logo1 from "../../../Images/companylogo1.png";
import game from "../../../Images/gameware.png";
import logo2 from "../../../Images/company-logo2.png";
import logo3 from "../../../Images/company-logo3.png";
import logo4 from "../../../Images/company-logo4.png";
import logo5 from "../../../Images/company-logo5.png";
import { FaRegComments } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa6";
import { BiSolidPieChartAlt2 } from "react-icons/bi";


export default function ViewJobs() {
  return (
    <div>
    <div className="jobWrapper w-full px-8 mx-auto bg-lightblue h-auto py-4 my-8">
      <ul className="flex flex-col justify-center items-center ">
        <li>
          <Link>
            <div className="jobCardWrapper py-4 ">
              <Link>
                <div className="px-6 py-8 b border shadow-xl bg-white h-[12rem] rounded-xl w-[30rem] max-w-[32rem] md:max-w-[25rem] lg:max-w-[30rem]">
                  <div className="mx-5">
                    <div className="cardHeadingWrapper flex ho hoverCardHeading">
                      <div className="bg-[#EFF5FB] chartline rounded-md px-[0.3rem] py-[0.3rem]">
                        <BiSolidPieChartAlt2 className="faicon" />
                      </div>
                      <h2 className="text-gray-400 text-normal pl-[0.5rem]">
                        Business Development
                      </h2>
                    </div>
                    <h3 className="text-black font-bold texl-xl pt-2">
                      Technical Writer
                    </h3>
                    <div className="location-list text-center  pt-2">
                      <ul className="list-none flex flex-wrap ">
                        <li>
                          <Link
                            to="/loc"
                            className="text-black font-semibold pr-5"
                          >
                            Los Angeles, CA
                          </Link>
                        </li>
                        <li className="font-normal text-gray-600 pl-7">
                          Part time
                        </li>
                      </ul>
                    </div>
                    <div className="cardFooter flex justify-between ">
                      <div className="cardFoooterText pt-2">
                        <p className=" font-thin text-gray-400 pb-1">
                          June 5, 2024
                        </p>
                        <h3 className=" text-black font-medium">
                          Crafgenics
                        </h3>
                      </div>
                      <div className="companyIcon">
                        <img
                          src={logo1}
                          className="rounded-xl w-10"
                          alt="Company Logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Link>
        </li>
        <li>
          <Link>
            <div className="jobCardWrapper py-4 ">
              <Link>
                <div className="px-6 py-8 b border shadow-xl bg-white h-[12rem] rounded-xl w-[30rem] max-w-[32rem] md:max-w-[25rem] lg:max-w-[30rem]">
                  <div className="mx-5">
                    <div className="cardHeadingWrapper flex ho hoverCardHeading">
                      <div className="bg-[#EFF5FB] chartline rounded-md px-[0.3rem] py-[0.3rem]">
                        <FaTerminal className="faicon" />
                      </div>
                      <h2 className="text-gray-400 text-normal pl-[0.5rem]">
                        Software Engineering
                      </h2>
                    </div>
                    <h3 className="text-black font-bold texl-xl pt-2">
                      Full Stack Developer
                    </h3>
                    <div className="location-list text-center  pt-2">
                      <ul className="list-none flex flex-wrap ">
                        <li>
                          <Link
                            to="/loc"
                            className="text-black font-semibold pr-5"
                          >
                            Lahore,Punjab
                          </Link>
                        </li>
                        <li className="font-normal text-gray-600 pl-7">
                          Full Time
                        </li>
                      </ul>
                    </div>
                    <div className="cardFooter flex justify-between ">
                      <div className="cardFoooterText pt-2">
                        <p className=" font-thin text-gray-400 pb-1">
                          June 2, 2024
                        </p>
                        <h3 className=" text-black font-medium">
                          Gameware
                        </h3>
                      </div>
                      <div className="companyIcon">
                        <img
                          src={game}
                          className="rounded-xl w-10"
                          alt="Company Logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Link>
        </li>
        <li>
          <Link>
            <div className="jobCardWrapper py-4 ">
              <Link>
                <div className="px-6 py-8 b border shadow-xl bg-white h-[12rem] rounded-xl w-[30rem] max-w-[32rem] md:max-w-[25rem] lg:max-w-[30rem]">
                  <div className="mx-5">
                    <div className="cardHeadingWrapper flex ho hoverCardHeading">
                      <div className="bg-[#EFF5FB] chartline rounded-md px-[0.3rem] py-[0.3rem]">
                        <FaRegComments className="faicon" />
                      </div>
                      <h2 className="text-gray-400 text-normal pl-[0.5rem]">
                        Customer Services
                      </h2>
                    </div>
                    <h3 className="text-black font-bold texl-xl pt-2">
                      Technical Support Enginner
                    </h3>
                    <div className="location-list text-center  pt-2">
                      <ul className="list-none flex flex-wrap ">
                        <li>
                          <Link
                            to="/loc"
                            className="text-black font-semibold pr-5"
                          >
                            Los Angeles, CA
                          </Link>
                        </li>
                        <li className="font-normal text-gray-600 pl-7">
                          Part time
                        </li>
                      </ul>
                    </div>
                    <div className="cardFooter flex justify-between ">
                      <div className="cardFoooterText pt-2">
                        <p className=" font-thin text-gray-400 pb-1">
                          June 3, 2024
                        </p>
                        <h3 className=" text-black font-medium">
                          Illuminate Studio
                        </h3>
                      </div>
                      <div className="companyIcon">
                        <img
                          src={logo2}
                          className="rounded-xl w-10"
                          alt="Company Logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Link>
        </li>
        <li>
          <Link>
            <div className="jobCardWrapper py-4 ">
              <Link>
                <div className="px-6 py-8 b border shadow-xl bg-white h-[12rem] rounded-xl w-[30rem] max-w-[32rem] md:max-w-[25rem] lg:max-w-[30rem]">
                  <div className="mx-5">
                    <div className="cardHeadingWrapper flex ho hoverCardHeading">
                      <div className="bg-[#EFF5FB] chartline rounded-md px-[0.3rem] py-[0.3rem]">
                        <FaRegCalendar  className="faicon" />
                      </div>
                      <h2 className="text-gray-400 text-normal pl-[0.5rem]">
                        Human Resources
                      </h2>
                    </div>
                    <h3 className="text-black font-bold texl-xl pt-2">
                    Human Resource Manager
                    </h3>
                    <div className="location-list text-center  pt-2">
                      <ul className="list-none flex flex-wrap ">
                        <li>
                          <Link
                            to="/loc"
                            className="text-black font-semibold pr-5"
                          >
                            Karachi, Sindh
                          </Link>
                        </li>
                        <li className="font-normal text-gray-600 pl-7">
                          Full time
                        </li>
                      </ul>
                    </div>
                    <div className="cardFooter flex justify-between ">
                      <div className="cardFoooterText pt-2">
                        <p className=" font-thin text-gray-400 pb-1">
                          June 5, 2024
                        </p>
                        <h3 className=" text-black font-medium">
                          DataRes
                        </h3>
                      </div>
                      <div className="companyIcon">
                        <img
                          src={logo3}
                          className="rounded-xl w-10"
                          alt="Company Logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Link>
        </li>
        <li>
          <Link>
            <div className="jobCardWrapper py-4 ">
              <Link>
                <div className="px-6 py-8 b border shadow-xl bg-white h-[12rem] rounded-xl w-[30rem] max-w-[32rem] md:max-w-[25rem] lg:max-w-[30rem]">
                  <div className="mx-5">
                    <div className="cardHeadingWrapper flex ho hoverCardHeading">
                      <div className="bg-[#EFF5FB] chartline rounded-md px-[0.3rem] py-[0.3rem]">
                        <FaRegAddressCard  className="faicon" />
                      </div>
                      <h2 className="text-gray-400 text-normal pl-[0.5rem]">
                       Project Managment
                      </h2>
                    </div>
                    <h3 className="text-black font-bold texl-xl pt-2">
                      Software Engineering Team Lead
                    </h3>
                    <div className="location-list text-center  pt-2">
                      <ul className="list-none flex flex-wrap ">
                        <li>
                          <Link
                            to="/loc"
                            className="text-black font-semibold pr-5"
                          >
                            Lahore,Punjab
                          </Link>
                        </li>
                        <li className="font-normal text-gray-600 pl-7">
                          Part time
                        </li>
                      </ul>
                    </div>
                    <div className="cardFooter flex justify-between ">
                      <div className="cardFoooterText pt-2">
                        <p className=" font-thin text-gray-400 pb-1">
                          May 5, 2024
                        </p>
                        <h3 className=" text-black font-medium">
                         Spspresoft
                        </h3>
                      </div>
                      <div className="companyIcon">
                        <img
                          src={logo4}
                          className="rounded-xl w-10"
                          alt="Company Logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Link>
        </li>
        <li>
          <Link>
            <div className="jobCardWrapper py-4 ">
              <Link>
                <div className="px-6 py-8 b border shadow-xl bg-white h-[12rem] rounded-xl w-[30rem] max-w-[32rem] md:max-w-[25rem] lg:max-w-[30rem]">
                  <div className="mx-5">
                    <div className="cardHeadingWrapper flex ho hoverCardHeading">
                      <div className="bg-[#EFF5FB] chartline rounded-md px-[0.3rem] py-[0.3rem]">
                        <FaChartLine className="faicon" />
                      </div>
                      <h2 className="text-gray-400 text-normal pl-[0.5rem]">
                        Finance
                      </h2>
                    </div>
                    <h3 className="text-black font-bold texl-xl pt-2">
                      Financal Analyst
                    </h3>
                    <div className="location-list text-center  pt-2">
                      <ul className="list-none flex flex-wrap ">
                        <li>
                          <Link
                            to="/loc"
                            className="text-black font-semibold pr-5"
                          >
                            Lahore,Pakistan
                          </Link>
                        </li>
                        <li className="font-normal text-gray-600 pl-7">
                          Full time
                        </li>
                      </ul>
                    </div>
                    <div className="cardFooter flex justify-between ">
                      <div className="cardFoooterText pt-2">
                        <p className=" font-thin text-gray-400 pb-1">
                          June 1, 2024
                        </p>
                        <h3 className=" text-black font-medium">
                          Artistre Studio
                        </h3>
                      </div>
                      <div className="companyIcon">
                        <img
                          src={logo5}
                          className="rounded-xl w-10"
                          alt="Company Logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  </div>
  )
}
