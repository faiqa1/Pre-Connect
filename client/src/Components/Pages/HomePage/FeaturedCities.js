import React from "react";
import { Link } from "react-router-dom";
import san from "../../../Images/-san-francisco.png";

export default function FeaturedCities() {
  return (
    <div className="featuredCitiesWrapper my-12 sm:my-16 lg:my-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-black font-extrabold text-3xl sm:text-4xl lg:text-5xl">Featured Cities</h2>
      <p className="text-gray-500 py-4 sm:py-5">
        Start your next career in a beautiful city
      </p>
      <div className="citiesCardWrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className="jobCardWrapper">
            <Link>
              <div className="border shadow-xl bg-white rounded-3xl overflow-hidden">
                <div>
                  <img
                    src={san}
                    className="w-full h-48 sm:h-56 object-cover"
                    alt="City"
                  />
                  <div className="location-list text-center p-4">
                    <ul className="list-none">
                      <li>
                        <Link
                          to="/loc"
                          className="text-black font-bold hover:text-blue-500"
                        >
                          San Francisco, CA
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
        ))}
      </div>
    </div>
  );
}
