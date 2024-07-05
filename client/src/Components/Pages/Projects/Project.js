import React from 'react'
import PostProject from './PostProject'
import ViewProject from './ViewProject'
import RightsideBar from './RightsideBar'

export default function Project() {
  return (
    <div className='flex  '>
      <div className='my-5'>
    <PostProject/>
    </div>
    <div className='mx-20'>
    <ViewProject/>
    </div>
    <div className='ml-[5rem] my-5'>
    <RightsideBar/>
    </div>
    </div>
  )
}
