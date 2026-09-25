"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useSession,signOut } from 'next-auth/react'
import Account_Hamburger from './Account_Hamburger.js'
import Hamburger from './Hamburger.js'

const Dash_Navbar = () => {
  const [Show, setShow] = useState(false)
  const [BtnNor, setBtnNor] = useState(true)
      const{data :session}=useSession()
     if(session){
    //   return <>
    //   signed in as {session.user.name} <br/>
    //   <button onClick={()=> signOut()}>Sign Out</button>
    //   </>
    
  return (
     <nav className='flex z-250 max-sm:flex-col max-sm:items-center justify-between text-white items-center p-2 sticky top-0 bg-gray-800'>
      <div className='appName font-bold flex justify-center items-center'>
       <div className='cupImg'><img src="\tea_cup_image-removebg-preview.png" alt="" width={40}/></div> 
       <Link href="/"><div className='appNameText text-[17px] cursor-pointer'>Get Me a Chai!</div></Link>
     
          
        </div>
        <div className='dash_Btns max-sm:flex-col max-sm:items-center flex mt-[5px] gap-[11px]'>
        <button id='accountBtn' className='accountButton flex items-center gap-2.5 px-2.5 button text-white cursor-pointer border-0 rounded-[8px] py-2.5 text-sm font-bold bg-blue-500' onClick={()=>{setBtnNor(!BtnNor),BtnNor?document.querySelector("#accountBtn").style=" border:2px solid #431fe3":"", setShow(!Show)}} >Welcome {session.user.email}  <img src="/arrow_down.svg" alt="" /></button>
     <Link href="/login"><button id='logOutBtn' className='LogoutBtn button text-white cursor-pointer border-0 rounded-[8px] px-5 py-3 text-sm font-bold bg-[linear-gradient(109.6deg,rgba(166,64,221,1)_21.2%,rgba(102,165,235,1)_74.4%)]' onClick={()=> signOut({callbackUrl:"/login"})}>Logout</button></Link>
    { Show?<Account_Hamburger/>:""}

        </div>
      
    </nav>
  )
   }
}

export default Dash_Navbar
