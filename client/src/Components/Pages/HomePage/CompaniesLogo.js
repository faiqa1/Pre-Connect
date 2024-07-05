import React from 'react'
import Amazon from '../../../Images/amazon.png'
import Google from '../../../Images/google.png'
import Microsoft from '../../../Images/microsoft.png'
import Netflix from '../../../Images/netflix.png'
export default function CompaniesLogo() {
  return (
    <div className='wRapper mt-[5%]'>
      <div>
        <ul className='flex justify-center'>
            <li className='w-[184px]'>
                <img src={Amazon}/>
            </li>
            <li className='w-[184px]'>
                <img src={Google} className='mt-[-2rem] mx-[2rem]'/>
            </li>
            <li className='w-[184px]'>
                <img src={Microsoft} className='mt-[-1.2rem] mx-[2rem]'/>
            </li>
            <li className='w-[184px]'>
                <img src={Netflix} className='mt-[-1.2rem] mx-[2rem]'/>
            </li>
        </ul>
      </div>
    </div>
  )
}
