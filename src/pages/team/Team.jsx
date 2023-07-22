import React from 'react'
import PagesNav from '../../pagesNav/PagesNav'
import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md'
import { Link } from 'react-router-dom'
//import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { MdAccessTime, MdCall, MdMail } from "react-icons/md";
import {
  FaBlenderPhone,
  FaDownload,
  FaFilePdf,
  FaFilePowerpoint,
  FaFileWord,
} from "react-icons/fa";
import  {TeamData}  from './TeamData';
const Team = () => {
  return (
    <div>
       <PagesNav />
       <div className="planBg">
        <div>
          <h1>
          OUR  <span>TEAM</span> 
          </h1>
          <div>
            <span>
              You are here: <Link to="/">Home</Link>{" "}
              <MdOutlineKeyboardDoubleArrowRight /> Our-Team{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="team__info mt-8 flex flex-col md:flex md:flex-row   items-center  md:w-[80%] mr-auto ml-auto ">
      <div className="info1 ">
          <div className="team ">
            <p className=''>COMPANY</p>
            <p id="teamInfo ">OUR TEAM</p>
            <p id="teamInfo">CAREERS</p>
          </div>
          <div>
            <h3>CONTACT</h3>
            <ul>
              <li>
                {" "}
                <ImLocation2 className="text-[#fbb600]" /> Ahenema Kokorben,
                Kumasi Ghana
              </li>
              <li>
                {" "}
                <MdCall className="text-[#fbb600]" /> (+233) 556230613
              </li>
              <li id="mail">
                {" "}
                <MdMail className="text-[#fbb600]" />
                mashaallahconstruction43@gmail.com
              </li>
              <li>
                {" "}
                <FaBlenderPhone className="text-[#fbb600]" /> (+233) 556230613
              </li>
              <li>
                {" "}
                <MdAccessTime className="text-[#fbb600]" /> Mon - Sat: 9:00 -
                18:00
              </li>
            </ul>
          </div>

          <div>
            <h3>BROCHURES</h3>
            <p>
              {" "}
              <FaFilePdf className="text-[gray]" /> Download.PDF{" "}
              <FaDownload className="text-[gray]" />{" "}
            </p>
            <p>
              {" "}
              <FaFilePdf className="text-[gray]" /> Download.PDF{" "}
              <FaDownload className="text-[gray]" />{" "}
            </p>
            <p>
              {" "}
              <FaFilePdf className="text-[gray]" /> Download.PDF{" "}
              <FaDownload className="text-[gray]" />{" "}
            </p>
          </div>

          <div id="brochers2">
            <h3>BROCHURES</h3>
            <p>
              {" "}
              <FaFilePdf className="text-[gray]" /> Download.PDF{" "}
            </p>
            <p>
              {" "}
              <FaFileWord className="text-[gray]" /> Download.DOC{" "}
            </p>
            <p>
              {" "}
              <FaFilePowerpoint className="text-[gray]" /> Download.PPT{" "}
            </p>
          </div>

          <div className="tags">
            <h3>TAGS</h3>
            <ul>
              <li className=" tagText text-[#000]">Build</li>
              <li className=" tagText text-[#000]">Construction</li>
              <li className="tagText text-[#000]">Masha Allah</li>
              <li className="tagText text-[#000]">Ghana</li>
              <li className="tagText text-[#000]">Plans</li>
              <li className="tagText text-[#000]">Home</li>
            </ul>
          </div>
        </div>
        <div className=" ml-0 info2  mt-0 text-center md:text-left">
           <h1 className=' mt-3 pb-1 border-b-[.3rem] border-[#fbb600] md:text-left text-center  inline-block text-2xl tracking-wide md:tracking-widest font-bold'>BOARD OF DIRECTORS</h1>
            <p className='text-base mt-4 text-[gray]'>Masha Allah Construction is made up  of talented people who helped make Masha Allah Construction what it is today..</p>
       
              <div className="   pl-0 p-2 info2_detail grid grid-cols-1 text-center  md:flex   md:flex-wrap  mt-8">
                {
                  TeamData.map(team =>{
                   return (
                    <div className=' ml-0 md:w-[20rem] w-full   flex items-center  flex-col m-4 '>
                      <p className='bg-[#f7f7f7]  md:w-[70%] w-[70%] flex items-center justify-center py-2'>
                    <p className=' flex rounded-full items-center justify-center bg-[#142e49] w-[9rem] h-[9rem] md:w-[12rem] md:h-[12rem] text-[5rem] md:text-[7rem]'> <span className='text-white'>{team.user}</span> </p>
                    </p>
                    <p className=' italic text-base border-b-4 pb-1 mt-3 mb-3 font-semibold'>{team.userName}</p>
                   <p className='text-[gray] text-base mb-3'>{team.position}</p>
                    <p className='flex cursor-pointer text-2xl items-center justify-center  w-full'>
                    <p className='mr-3 transition-all text-[gray] hover:text-[#fbb600]'>{team.userSocials1}</p>
                    <p className='mr-3 transition-all text-[gray] hover:text-[#fbb600]'>{team.userSocials2}</p>
                    <p className='mr-3 transition-all text-[gray] hover:text-[#fbb600]'>{team.userSocials3}</p>
                    <p className='mr-3 transition-all text-[gray] hover:text-[#fbb600]'>{team.userSocials4}</p>
                    </p>
                 
                  </div>
                   )
                  
                  })
                }
              </div>
        </div>
      </div>
    </div>
  )
}

export default Team
