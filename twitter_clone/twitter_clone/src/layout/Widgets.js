import React from 'react'
import {SearchIcon} from "../icons/Icon"
import {Timeline} from "react-twitter-widgets"

function Widgets() {
  return (
    <aside className=' w-80 '>
     <div className='flex items-center space-x-4 p-3 m-3 bg-gray-lightest rounded-full text-gray-dark'>
      <SearchIcon className="w-5 h-5"></SearchIcon>
      <input type="text" placeholder='Search Twitter' className='placeholder-gray-dark bg-transparent outline-none w-full text-sm'/>
     </div>
     <div className='mt-4'>
     <Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'reactjs'
  }}
  options={{
    height: '1000'
  }}
/>
     </div>
    </aside>
  )
}

export default Widgets
