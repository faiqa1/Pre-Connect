import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaStethoscope } from "react-icons/fa";
import { BiSolidPieChartAlt2 } from "react-icons/bi";
import { FaCubes } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa6";
import { Link } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function JobCategory() {
  return (
    <div className="mlr-auto mt-[8rem]">
      <h2 className="text-black font-bold text-3xl text-center mb-4">
        Search by Category
      </h2>
      <p className="text-gray-500 text-xl text-center">
        Search your career opportunity with our categories
      </p>
      <button className="float-right mr-[10%] text-blue-600 font-bold">
        All Categories
      </button>
      <div className="carouselWrapper mt-[5%] mb-[5%] ">
        <Carousel
          responsive={responsive}
          infinite={true}
          // autoPlay={true}
          // autoPlaySpeed={100}
          showDots={true}
          className=" mx-auto justify-center
          max-w-[1192px] md:max-w-[600px] lg:max-w-[1192px] ">
          <div className="w-[18rem]  ">
            <div class="p-6 bg-white border flex flex-col justify-center  
            bgcarouselhover shadow bgCard h-[18rem] rounded-3xl
            max-w-[260px] md:max-w-[200px] lg:max-w-[260px]">
              <div
                className=" bg-white 
                 rounded-3xl w-[6.3rem] h-[6.3rem] m-auto flex 
                 justify-center iconwrapper  items-center"
              >
                <FaStethoscope className=" w-[5rem] h-[3rem]" />
              </div>
              <div className="jobcategorytext ">
              <p class="mb-3 mt-3 text-center text-black-800 text-normal font-bold">Healthcare</p>
              <h4 className="mb-3 mt-3 text-center text-black-800 font-normal">0 Open Positions</h4>
              </div>
            </div>
          </div>
          <div className="w-[18rem]  ">
            <div class="p-6 bg-white border flex flex-col justify-center  
            bgcarouselhover shadow bgCard h-[18rem] rounded-3xl
            max-w-[260px] md:max-w-[206px] lg:max-w-[260px]">
              <div
                className=" bg-white 
                 rounded-3xl w-[6.3rem] h-[6.3rem] m-auto flex 
                 justify-center iconwrapper  items-center"
              >
                <BiSolidPieChartAlt2 className="w-[5rem] h-[3rem]" />
              </div>
              <div className="jobcategorytext ">
              <p class="mb-3 mt-3 text-center text-black-800 text-normal font-bold">Business Development</p>
              <h4 className="mb-3 mt-3 text-center text-black-800 font-normal">2 Open Positions</h4>
              </div>
            </div>
          </div>
          <div className="w-[18rem]  ">
            <div class="p-6 bg-white border flex flex-col justify-center  
            bgcarouselhover shadow bgCard h-[18rem] rounded-3xl
            max-w-[260px] md:max-w-[206px] lg:max-w-[260px]">
              <div
                className=" bg-white 
                 rounded-3xl w-[6.3rem] h-[6.3rem] m-auto flex 
                 justify-center iconwrapper  items-center"
              >
                <FaCubes className="w-[5rem] h-[3rem]" />
              </div>
              <div className="jobcategorytext ">
              <p class="mb-3 mt-3 text-center text-black-800 text-normal font-bold">Construction</p>
              <h4 className="mb-3 mt-3 text-center text-black-800 font-normal">1 Open Positions</h4>
              </div>
            </div>
          </div>
          <div className="w-[18rem]  ">
            <div class="p-6 bg-white border flex flex-col justify-center  
            bgcarouselhover shadow bgCard h-[18rem] rounded-3xl
            max-w-[260px] md:max-w-[206px] lg:max-w-[260px]">
              <div
                className=" bg-white 
                 rounded-3xl w-[6.3rem] h-[6.3rem] m-auto flex 
                 justify-center iconwrapper  items-center"
              >
                <FaRegComments className="w-[5rem] h-[3rem]" />
              </div>
              <div className="jobcategorytext ">
              <p class="mb-3 mt-3 text-center text-black-800 text-normal font-bold">Customer Services</p>
              <h4 className="mb-3 mt-3 text-center text-black-800 font-normal">0 Open Positions</h4>
              </div>
            </div>
          </div>
          <div className="w-[18rem]  ">
            <div class="p-6 bg-white border flex flex-col justify-center  
            bgcarouselhover shadow bgCard h-[18rem] rounded-3xl
            max-w-[260px] md:max-w-[206px] lg:max-w-[260px]">
              <div
                className=" bg-white 
                 rounded-3xl w-[6.3rem] h-[6.3rem] m-auto flex 
                 justify-center iconwrapper  items-center"
              >
                <FaChartLine  className="w-[5rem] h-[3rem]" />
              </div>
              <div className="jobcategorytext ">
              <p class="mb-3 mt-3 text-center text-black-800 text-normal font-bold">Finance</p>
              <h4 className="mb-3 mt-3 text-center text-black-800 font-normal">3 Open Positions</h4>
              </div>
            </div>
          </div>
          <div className="w-[18rem]  ">
            <div class="p-6 bg-white border flex flex-col justify-center  
            bgcarouselhover shadow bgCard h-[18rem] rounded-3xl
            max-w-[260px] md:max-w-[206px] lg:max-w-[260px]">
              <div
                className=" bg-white 
                 rounded-3xl w-[6.3rem] h-[6.3rem] m-auto flex 
                 justify-center iconwrapper  items-center"
              >
                <FaRegAddressCard  className="w-[5rem] h-[3rem]" />
              </div>
              <div className="jobcategorytext ">
              <p class="mb-3 mt-3 text-center text-black-800 text-normal font-bold">Human Resources</p>
              <h4 className="mb-3 mt-3 text-center text-black-800 font-normal">2 Open Positions</h4>
              </div>
            </div>
          </div>
          <div className="w-[18rem]  ">
            <div class="p-6 bg-white border flex flex-col justify-center  
            bgcarouselhover shadow bgCard h-[18rem] rounded-3xl
            max-w-[260px] md:max-w-[206px] lg:max-w-[260px]">
              <div
                className=" bg-white 
                 rounded-3xl w-[6.3rem] h-[6.3rem] m-auto flex 
                 justify-center iconwrapper  items-center"
              >
                <FaRegCalendar className="w-[5rem] h-[3rem]" />
              </div>
              <div className="jobcategorytext ">
              <p class="mb-3 mt-3 text-center text-black-800 text-normal font-bold">Project Management</p>
              <h4 className="mb-3 mt-3 text-center text-black-800 font-normal">5 Open Positions</h4>
              </div>
            </div>
          </div>
          <div className="w-[18rem]  ">
            <div class="p-6 bg-white border flex flex-col justify-center  
            bgcarouselhover shadow bgCard h-[18rem] rounded-3xl
            max-w-[260px] md:max-w-[206px] lg:max-w-[260px]">
              <div
                className=" bg-white 
                 rounded-3xl w-[6.3rem] h-[6.3rem] m-auto flex 
                 justify-center iconwrapper  items-center"
              >
                <FaTerminal className="w-[5rem] h-[3rem]" />
              </div>
              <div className="jobcategorytext ">
              <p class="mb-3 mt-3 text-center text-black-800 text-normal font-semibold">Software Engineering</p>
              <h4 className="mb-3 mt-3 text-center text-black-800 font-normal">7 Open Positions</h4>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
