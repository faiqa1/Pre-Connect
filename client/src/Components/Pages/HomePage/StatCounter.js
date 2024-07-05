import React from 'react';
import CountUp from 'react-countup';

export default function StatCounter() {
  return (
    <div className='countwrapper px-5 rounded-md py-3 bg-[#0969c3] w-1/2 mx-auto flex  '>
      <div className='grid grid-cols-4 gap-4   text-center
      w-full max-h-[80rem] md:max-h-[70rem] lg:max-h-[80rem] '>
        <div>
          <h2 className='text-4xl font-bold text-[#fff]'>
            <CountUp start={0} end={12} duration={2.5}  />
            K+
          </h2>
          <p className='py-2 text-[#fff] font-medium'>Jobs Filled</p>
        </div>
        <div>
          <h2 className='text-4xl font-bold text-[#fff]'>
            <CountUp start={0} end={3500} duration={2.5} />
          </h2>
          <p className='py-2 text-[#fff] font-medium'>Active Listings</p>
        </div>
        <div>
          <h2 className='text-4xl font-bold text-[#fff]'>
            <CountUp start={0} end={800} duration={2.5} />
          </h2>
          <p className='py-2 text-[#fff] font-medium'>Companies Hiring</p>
        </div>
        <div>
          <h2 className='text-4xl font-bold text-[#fff]'>
            <CountUp start={0} end={5} duration={2.5} />M
          </h2>
          <p className='py-2 text-[#fff] font-medium'>Registered Users</p>
        </div>
        
       
      </div>
    </div>
  );
}
