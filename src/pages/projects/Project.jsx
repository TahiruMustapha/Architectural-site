import React from 'react'
import './Project.css'
import PagesNav from '../../pagesNav/PagesNav'
//import Plan from '../plan/Plan'
import { Link } from 'react-router-dom'
import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md'
import pro10 from './images/pro10.jpeg'
import pro7 from './images/pro7.jpeg'
import pro19 from './images/pro19.jpeg'
import pro22 from './images/pro22.jpeg'
import pro23 from './images/pro23.jpeg'
import pro24 from './images/pro24.jpeg'
import pro18 from './images/pro18.jpeg'
import pro25 from './images/pro25.jpeg'
import pro16 from './images/pro16.jpeg'
const Project = () => {
  return (
    <div>
       <PagesNav/>
       <div className="planBg projectsbg">
        <div>
          <h1>
            <span>OUR</span> PROJECTS
          </h1>
          <div>
            <span>
              You are here: <Link to="/">Home</Link>{" "}
              <MdOutlineKeyboardDoubleArrowRight /> Projects{" "}
            </span>
          </div>
        </div>
      </div> 
      <div className="mainProjects">
        <div className='flex w-[70%] flex-wrap'>
        <div className="project1">   
          <Link to='projects1'>
            <img src={pro10} alt="img" />
          </Link>
          <p>Project1</p>
        </div>
        <div className="project2">
        <Link to='projects2'>
            <img src={pro7} alt="img" />
          </Link>
          <p>Project2</p>
        </div>
        <div className="project3">
        <Link to='projects3'>
            <img src={pro19} alt="img" />
          </Link>
          <p>Project3</p>
        </div>
        <div className="project4">
        <Link to='projects4'>
            <img src={pro22} alt="img" />
          </Link>
          <p>Project4</p>
        </div>
        <div className="project5">
        <Link to='projects5'>
            <img src={pro23} alt="img" />
          </Link>
          <p>Project5</p>
        </div>
        <div className="project6">
        <Link to='projects6'>
            <img src={pro16} alt="img" />
          </Link>
          <p>Project6</p>
        </div>
        <div className="project7">
        <Link to='projects7'>
            <img src={pro18} alt="img" />
          </Link>
          <p>Project7</p>
        </div>
        <div className="project8">
        <Link to='projects8'>
            <img src={pro24} alt="img" />
          </Link>
          <p>Project8</p>
        </div>
        <div className="project9">
        <Link to='projects9'>
            <img src={pro25} alt="img" />
          </Link>
          <p>Project9</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Project
