import React from "react";
import ViewJobs from "./ViewJobs";
import UserHeader from "../UserHomePage/UserHeader";
export default function Job() {
  return(
  
   <div className='min-h-screen  '>
    <UserHeader />
      {/* <div className='my-5'>
    <CreateJob/>
    </div> */}
    <div className='mx-20'>
    <ViewJobs/>
    </div>
    {/* <div className='ml-[5rem] my-5'>
    <SeekGuidance/>
    </div> */}
  </div>
  );
}
