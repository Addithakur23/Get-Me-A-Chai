import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='flex z-250 justify-between text-white items-center p-2 sticky top-0 bg-gray-800'>
      <div className='appName font-bold flex justify-center items-center'>
       <div className='cupImg'><img src="\tea_cup_image-removebg-preview.png" alt="" width={40}/></div> 
       <div className='appNameText text-[17px] cursor-pointer' onClick={()=>{<Link href="/login"></Link>}}>Get Me a Chai!</div> 
     
          
        </div>
     <Link href="/login"><button id='loginBtn'  onClick={()=>{document.querySelector("#loginBtn").style=" border:2px solid #431fe3"}}  className='button text-white cursor-pointer border-0 rounded-[8px] px-5 py-3 text-sm font-bold bg-[linear-gradient(109.6deg,rgba(166,64,221,1)_21.2%,rgba(102,165,235,1)_74.4%)]'>Login</button></Link>
    </nav>
  )
}

export default Navbar
