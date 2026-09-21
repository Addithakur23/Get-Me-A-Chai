"use client"
import React from 'react'
import Navbar from '../components/Navbar.js'
import { signIn ,signOut,useSession} from 'next-auth/react'
export default function Component(){
//   const{data :session}=useSession()
//  if(session){
//   return <>
//   signed in as {session.user.name} <br/>
//   <button onClick={()=> signOut()}>Sign Out</button> 
//   </>
//  }


  return (
    <>
    <Navbar/>
    <div className='loginPage flex flex-col items-center'>
        <div className="loginText text-center mb-5.5 mt-8 font-bold text-3xl py-5">Login to Get Started</div>
        <div className="signinBtns flex flex-col gap-2.25">
        <button id="google" className='Button bg-white text-black hover:bg-gray-200 flex items-center justify-center border-none gap-2.5 rounded-[7px] cursor-pointer text-[15px] py-2.5 pr-12 pl-6.25 font-semibold text-center' onClick={()=>{signIn('google', {callbackUrl:"/Dashboard"})}}><img src="/google-logo-removebg-preview.png" alt="" width={30}/> Continue with Google</button>

        <button id="linkedIn" className='Button  bg-white text-black hover:bg-gray-200 flex items-center justify-center border-none gap-2.5 rounded-[7px] cursor-pointer text-[15px] py-2.5 pr-12 pl-6.25 font-semibold text-center' onClick={()=>{signIn('linkedin',{callbackUrl:"/login"})}}> <img src="/linkedIn_logo1-removebg-preview.png" alt="" width={30}/> Continue with LinkedIn</button>

        <button id="twitter" className='Button  bg-white text-black hover:bg-gray-200 flex items-center justify-center border-none gap-2.5 rounded-[7px] cursor-pointer text-[15px] py-2.5 pr-12 pl-6.25 font-semibold text-center' onClick={()=>{signIn('twitter', {callbackUrl:"/Dashboard"})}}><img src="/twitter-icon.png" alt="" width={30}/> Continue with Twitter</button>

        <button id="Facebook" className='Button bg-white text-black hover:bg-gray-200 flex items-center justify-center border-none gap-2.5 rounded-[7px] cursor-pointer text-[15px] py-2.5 pr-12 pl-6.25 font-semibold text-center' onClick={()=>signIn('facebook', {callbackUrl:"/Dashboard"})}><img src="/facebook_logo-removebg-preview.png" alt="" width={30}/> Continue with Facebook</button>

        <button id="Github" className='Button bg-white text-black hover:bg-gray-200 flex items-center justify-center border-none gap-2.5 rounded-[7px] cursor-pointer text-[15px] py-2.5 pr-12 pl-6.25 font-semibold text-center' onClick={()=>signIn('github', {callbackUrl:"/Dashboard"})}><img src="/github_logo-removebg-preview.png" alt="" width={30}/> Continue with Github</button>

        <button id="Apple" className='Button bg-white text-black hover:bg-gray-200 flex items-center justify-center border-none gap-2.5 rounded-[7px] cursor-pointer text-[15px] py-2.5 pr-12 pl-6.25 font-semibold text-center' onClick={()=>{signIn('apple', {callbackUrl:"/Dashboard"})}}><img src="/apple_logo-removebg-preview.png" alt="" width={30}/> Continue with Apple</button>
        </div>
    </div>
    </>
  )
}


