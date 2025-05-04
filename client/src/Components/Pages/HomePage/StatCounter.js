import React from 'react';
import CountUp from 'react-countup';

export default function StatCounter() {
  return (
    <div className='countwrapper px-4 sm:px-6 rounded-md py-3 bg-[#0969c3] w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center w-full'>
        <div className='p-2'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#fff]'>
            <CountUp start={0} end={12} duration={2.5} />K+
          </h2>
          <p className='py-2 text-[#fff] font-medium text-sm sm:text-base'>Jobs Filled</p>
        </div>
        <div className='p-2'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#fff]'>
            <CountUp start={0} end={3500} duration={2.5} />
          </h2>
          <p className='py-2 text-[#fff] font-medium text-sm sm:text-base'>Active Listings</p>
        </div>
        <div className='p-2'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#fff]'>
            <CountUp start={0} end={800} duration={2.5} />
          </h2>
          <p className='py-2 text-[#fff] font-medium text-sm sm:text-base'>Companies Hiring</p>
        </div>
        <div className='p-2'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#fff]'>
            <CountUp start={0} end={5} duration={2.5} />M
          </h2>
          <p className='py-2 text-[#fff] font-medium text-sm sm:text-base'>Registered Users</p>
        </div>
      </div>
    </div>
  );
}
