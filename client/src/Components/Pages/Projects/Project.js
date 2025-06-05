import React from 'react'
import ViewProject from './ViewProject'
import UserHeader from '../UserHomePage/UserHeader'

export default function Project() {
  return (
    <div className='min-h-screen '>
      <UserHeader/>
      {/* <div className='my-5'>
    <PostProject/>
    </div> */}
    <div className='mx-20'>
    <ViewProject/>
    </div>
    {/* <div className='ml-[5rem] my-5'>
    <RightsideBar/>
    </div> */}
    </div>
  )
}
