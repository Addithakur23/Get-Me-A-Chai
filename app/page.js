"use client"
import Image from "next/image";
import Footer from "./components/Footer.js";
import { useSession } from "next-auth/react";
import Navbar from "./components/Navbar.js";
import Link from "next/link.js";
import Dash_Navbar from "./components/Dash_Navbar.js";

export default function Home() {
  const{data :session}=useSession()
  return (<>
    {session?<Dash_Navbar/>:<Navbar/>}
    <div className="main">
   <div className="firstSec pt-21.25 pb-27.5 text-white">
    <div className="appIntro flex items-center justify-center font-bold text-[45px] max-sm:text-[35px] max-sm:gap-4.5  gap-14.75">
      <div className="text">
       Get Me a Chai </div>
      <img src="\tea_cup_image-removebg-preview.png" alt="" width={80}/>
      </div>
      <div className="aboutApp text-center">
        <div className="infoText1 py-3.5 mx-3">A crowdfunding platform for creators to fund their projects.</div>
        <div className="infoText2 mx-3">A place where fans can buy you a chai. Unleash the power of your fans and get your projects funded.</div>
      </div>
      <div className="btns flex items-center justify-center gap-2 mt-3">
       <Link href="/login"> <button id="startBtn" className="startButton gap-2.5 button text-white cursor-pointer border-0  px-5 py-3 rounded-[8px] text-sm font-bold bg-[linear-gradient(109.6deg,rgba(166,64,221,1)_21.2%,rgba(102,165,235,1)_74.4%)]">Start Here</button></Link>
      <Link href="/about">  <button id="readBtn" className="readButton gap-2.5 button text-white cursor-pointer border-0  px-5 py-3 rounded-[8px] text-sm font-bold bg-[linear-gradient(109.6deg,rgba(166,64,221,1)_21.2%,rgba(102,165,235,1)_74.4%)]">Read More</button></Link>
      </div>   
   </div>
      <div className="divider border-2 text-gray-600"></div>

      <div className="secondSec mb-30 pt-11.25">
          <div className="secondSecIntroText text-center text-[25px] font-bold">Your Fans can buy you a Chai</div>
        <div className="howFundraise flex max-lg:flex-wrap max-md:flex-col max-lg:gap-8 justify-center items-center gap-[12%] mt-7.5">
          <div className="fanHelp flex items-center flex-col">
          <div className="helpImg "><img src="\a_man_working_on_laptop-removebg-preview.png" className="helpImage p-2 rounded-[60px] bg-gray-500" alt="" width={75}/></div>  
          <div className="helpText1 mt-1.5 mb-3.25 font-bold">Fan want to help</div>
          <div className="helpText2 text-sm text-gray-500">Your fans are available to support you</div>
          </div>

           <div className="fanMoney flex items-center flex-col">
          <div className="coinImg"><img className="coinImage p-2 rounded-[60px] bg-gray-500" src="\gold_coin-removebg-preview.png" alt="" width={75}/></div>  
          <div className="moneyText1 mt-1.5 mb-3.25 font-bold">Fan want to contribute</div>
          <div className="moneyText2 text-sm text-gray-500">Your fan willing to contribute financially</div>
          </div>

           <div className="fanCollaborate  flex items-center flex-col">
          <div className="collaborateImg"><img className="collabImage p-2 rounded-[60px] bg-gray-500" src="\persons-removebg-preview.png" alt="" width={75}/></div>  
          <div className="collaborateText1 mt-1.5 mb-3.25 font-bold">Fan want to collaborate</div>
          <div className="collaborateText2 text-sm text-gray-500">Your fans are ready to collaborate with you</div>
          </div>
        </div>
      </div>

       <div className="divider border-2 text-gray-600"></div>
       <div className="thirdSec pt-11.75 pb-16.25 flex flex-col items-center justify-center">
        <div className="LearnText text-[25px] font-bold mb-9">Learn more about us</div>
      <div className="video w-[588px] h-[332px] max-md:w-[500px] max-md:h-[278px]   max-sm:w-[422px] max-sm:h-[236px] max-[465px]:!w-[336px] max-[465px]:!h-[189px] max-[465px]:mb-24  flex items-center justify-center">
      <iframe  className="Frame border-none object-cover w-full h-full shrink-0"  src="https://www.youtube.com/embed/1BsVhumGlNc" title="Image, Lists, and Tables in HTML | Sigma Web Development Course - Tutorial #5"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>
        </div> 
        {/*width="650"  height="350" */}
        {/* widthwidth    width: 500px;
    height: 278px;      height: 332px;
    width: 550px;      width: 308px;
    height: 189px;    width: 422px;  height: 236px; */}
       </div>
       <Footer/>
   </div>
   </>
  );
}

