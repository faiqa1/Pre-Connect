import React from 'react'
import Amazon from '../../../Images/amazon.png'
import Google from '../../../Images/google.png'
import Microsoft from '../../../Images/microsoft.png'
import Netflix from '../../../Images/netflix.png'

export default function CompaniesLogo() {
  return (
    <div className='wrapper my-8 sm:my-12 lg:my-16'>
      <div className='container mx-auto px-4'>
        <ul className='flex flex-wrap justify-center items-center gap-4 sm:gap-8 lg:gap-12'>
          <li className='w-32 sm:w-40 lg:w-48'>
            <img src={Amazon} alt="Amazon" className='w-full h-auto' />
          </li>
          <li className='w-32 sm:w-40 lg:w-48'>
            <img src={Google} alt="Google" className='w-full h-auto' />
          </li>
          <li className='w-32 sm:w-40 lg:w-48'>
            <img src={Microsoft} alt="Microsoft" className='w-full h-auto' />
          </li>
          <li className='w-32 sm:w-40 lg:w-48'>
            <img src={Netflix} alt="Netflix" className='w-full h-auto' />
          </li>
        </ul>
      </div>
    </div>
  )
}
