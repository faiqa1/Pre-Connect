import React from "react";
import SecionOne from "./SecionOne";
import StatCounter from "./StatCounter";
import JobCategory from "./JobCategory";
import NewsLetter from "./NewsLetter.";
import Enquire from "./Enquire";
import CompaniesLogo from "./CompaniesLogo";
import FeaturedJobs from "./FeaturedJobs";
import Companies from "./Companies";
import FeaturedCities from "./FeaturedCities";
export default function Home() {
  return (
    <div>
      <div className="relative">
        <SecionOne />
        <div className="absolute top-[23rem] left-0 right-0">
          <StatCounter />
        </div>
      </div>
      <JobCategory />
      <FeaturedJobs />
      <CompaniesLogo />
      <Companies />
      {/*<FeaturedCities/> */}
      <NewsLetter />
    </div>
  );
}
