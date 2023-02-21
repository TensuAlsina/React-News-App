import React from 'react'
import {AiFillSetting} from "react-icons/ai"
function ProfileCard() {
  return (
    <div className='bg-white flex p-7 rounded-lg shadow-lg'>
      <div className='mr-4'>
        <div className='mb-3'>
          <img className="rounded-2xl  w-9 h-9" src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80" alt=""/>
        </div>
        <div className='font-bold'>Tinsae Hailu</div>
      </div>
      <div className='mt-6'><AiFillSetting/></div>
    </div>
  )
}

export default ProfileCard