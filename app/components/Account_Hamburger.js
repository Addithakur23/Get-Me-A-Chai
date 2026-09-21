import React from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
const Account_Hamburger = () => {
  return (
    //     right: 84px;
    // width: 26%;
       <div className="dashboardOptionBox flex flex-col w-[12%] absolute top-13.75 right-0.75 max-sm:w-[32%] max-sm:right-[43px] max-md:w-[25%] max-md:right-[35px] max-lg:w-[22%] max-lg:right-[25px]">
       <div className="dashboardOptions flex flex-col z-300 overflow-hidden bg-gray-500 w-full rounded-[7px]">
     <Link href="/Dashboard"><button className='DashButton hover:bg-gray-500 py-1.5 px-[18px] cursor-pointer flex border-none w-full bg-gray-400'>Dashboard</button></Link>
        <Link href="/your_page"><button className='DashButton hover:bg-gray-500 py-1.5 px-4.5 cursor-pointer flex border-none w-full bg-gray-400'>Your Page</button></Link>
      <Link href="/login"><button className='DashButton hover:bg-gray-500 py-1.5 px-4.5 cursor-pointer flex border-none w-full bg-gray-400'>Sign Out</button></Link> 
       </div>
       </div>
  )
}

export default Account_Hamburger
