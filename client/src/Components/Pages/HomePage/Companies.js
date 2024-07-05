import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../../Images/companylogo1.png";
import logo2 from "../../../Images/company-logo2.png";
import logo3 from "../../../Images/company-logo3.png";
import logo4 from "../../../Images/company-logo4.png";

export default function Companies() {
  return (
    <div className=" " id="companies">
      <h2 className="text-black font-extrabold text-4xl pt-10 pb-2 ml-16">
        Find Best Companies
      </h2>
      <p className="text-gray-500 py-5  ml-16 pb-4">
        Work for the best companies in the world
      </p>
      <div className="companiesWrapper grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center mx-10">
        <div className="jobCardWrapper max-w-[380px] md:max-w-[306px] lg:max-w-[380px] py-2 px-2">
          <Link>
            <div className="max-w-sm p-6 b border shadow-xl bg-white h-[26rem] rounded-3xl">
              <div className="">
                <img src={logo1} className="rounded-3xl w-[25%] mb-5 pt-5" />
                <h2 className="text-black font-extrabold pb-2">
                  Artistre Studio
                </h2>
                <p className="text-gray-500 font-normal">
                  CoderBotics, Inc. is an American multinational corporation
                  that is engaged in the design, development, manufacturing, and
                  worldwide marketing and sales of footwear, apparel, equipment,
                  accessories, and services. The company is...
                </p>
                <div className="location-list text-center pb-2 pt-5">
                  <ul className="list-none flex flex-wrap ">
                    <li>
                      <Link
                        to="/loc"
                        className="text-black font-bold hover:text-blue-500"
                      >
                        1 Job
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="jobCardWrapper max-w-[380px] md:max-w-[306px] lg:max-w-[380px] py-2 px-2">
          <Link>
            <div className="max-w-sm p-6 b border shadow-xl bg-white h-[26rem] rounded-3xl">
              <div className="">
                <img src={logo2} className="rounded-3xl w-[25%] mb-5 pt-5" />
                <h2 className="text-black font-extrabold pb-2">Syspresoft</h2>
                <p className="text-gray-500 font-normal">
                  CoderBotics, Inc. is an American multinational corporation
                  that is engaged in the design, development, manufacturing, and
                  worldwide marketing and sales of footwear, apparel, equipment,
                  accessories, and services. The company is...
                </p>
                <div className="location-list text-center pb-2 pt-5">
                  <ul className="list-none flex flex-wrap">
                    <li>
                      <Link
                        to="/loc"
                        className="text-black font-bold hover:text-blue-500"
                      >
                        1 Job
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="jobCardWrapper max-w-[380px] md:max-w-[306px] lg:max-w-[380px] py-2 px-2">
          <Link>
            <div className="max-w-sm p-6 b border shadow-xl bg-white h-[26rem] rounded-3xl">
              <div className="">
                <img src={logo3} className="rounded-3xl w-[25%] mb-5 pt-5" />
                <h2 className="text-black font-extrabold pb-2">DataRes</h2>
                <p className="text-gray-500 font-normal">
                  CoderBotics, Inc. is an American multinational corporation
                  that is engaged in the design, development, manufacturing, and
                  worldwide marketing and sales of footwear, apparel, equipment,
                  accessories, and services. The company is...
                </p>
                <div className="location-list text-center pb-2 pt-5">
                  <ul className="list-none flex flex-wra">
                    <li>
                      <Link
                        to="/loc"
                        className="text-black font-bold hover:text-blue-500"
                      >
                        1 Job
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="jobCardWrapper max-w-[380px] md:max-w-[306px] lg:max-w-[380px] py-2 px-2">
          <Link>
            <div className="max-w-sm p-6 b border shadow-xl bg-white h-[26rem] rounded-3xl">
              <div className="">
                <img src={logo4} className="rounded-3xl w-[25%] mb-5 pt-5" />
                <h2 className="text-black font-extrabold pb-2">Craftgenics</h2>
                <p className="text-gray-500 font-normal">
                  CoderBotics, Inc. is an American multinational corporation
                  that is engaged in the design, development, manufacturing, and
                  worldwide marketing and sales of footwear, apparel, equipment,
                  accessories, and services. The company is...
                </p>
                <div className="location-list text-center pb-2 pt-5">
                  <ul className="list-none flex flex-wrap">
                    <li>
                      <Link
                        to="/loc"
                        className="text-black font-bold hover:text-blue-500"
                      >
                        1 Job
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

     
      <div className="btnjoboffer mt-[3%] ml-[3.5%]">
        <button>
          <Link
            to="/"
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
