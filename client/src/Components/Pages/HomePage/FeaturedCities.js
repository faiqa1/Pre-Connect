import React from "react";
import { Link } from "react-router-dom";
import san from "../../../Images/-san-francisco.png";

export default function FeaturedCities() {
  return (
    <div className="featuredCitiesWrapper my-20 ml-10 ">
      <h2 className="text-black font-extrabold text-5xl">Featured Cities</h2>
      <p className="text-gray-500 py-5">
        Start your next carrer in a beautiful city
      </p>
      <div className="citiesCardWrapper flex flex-wrap ml-16 ">
        <div className="jobCardWrapper w-[21rem]">
          <Link>
            <div class="max-w-sm b border shadow-xl bg-white h-[18rem] rounded-3xl">
              <div className="">
                <img
                  src={san}
                  className=" rounded-3xl w-[22.97rem] h-[12.5rem] "
                />
                <div className="location-list text-center pb-2 pt-5 ">
                  <ul className="list-none mr-[2rem]">
                    <li>
                      <Link
                        to="/loc"
                        className="text-black font-bold hover:text-blue-500"
                      >
                        San Francisco,CA
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/loc"
                        className="text-black text-sm hover:text-blue-500"
                      >
                        3 Open Positions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="jobCardWrapper w-[21rem] ml-12 mr-8">
          <Link>
            <div class="max-w-sm b border shadow-xl bg-white h-[18rem] rounded-3xl">
              <div className="">
                <img
                  src={san}
                  className=" rounded-3xl w-[22.97rem] h-[12.5rem] "
                />
                <div className="location-list text-center pb-2 pt-5 ">
                  <ul className="list-none mr-[2rem]">
                    <li>
                      <Link
                        to="/loc"
                        className="text-black font-bold hover:text-blue-500"
                      >
                        San Francisco,CA
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/loc"
                        className="text-black text-sm hover:text-blue-500"
                      >
                        3 Open Positions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="jobCardWrapper w-[21rem] ml-8 mr-8">
          <Link>
            <div class="max-w-sm b border shadow-xl bg-white h-[18rem] rounded-3xl">
              <div className="">
                <img
                  src={san}
                  className=" rounded-3xl w-[22.97rem] h-[12.5rem] "
                />
                <div className="location-list text-center pb-2 pt-5 ">
                  <ul className="list-none mr-[2rem]">
                    <li>
                      <Link
                        to="/loc"
                        className="text-black font-bold hover:text-blue-500"
                      >
                        San Francisco,CA
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/loc"
                        className="text-black text-sm hover:text-blue-500"
                      >
                        3 Open Positions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="jobCardWrapper w-[21rem] mt-5">
          <Link>
            <div class="max-w-sm b border shadow-xl bg-white h-[18rem] rounded-3xl">
              <div className="">
                <img
                  src={san}
                  className=" rounded-3xl w-[22.97rem] h-[12.5rem] "
                />
                <div className="location-list text-center pb-2 pt-5 ">
                  <ul className="list-none mr-[2rem]">
                    <li>
                      <Link
                        to="/loc"
                        className="text-black font-bold hover:text-blue-500"
                      >
                        San Francisco,CA
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/loc"
                        className="text-black text-sm hover:text-blue-500"
                      >
                        3 Open Positions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
