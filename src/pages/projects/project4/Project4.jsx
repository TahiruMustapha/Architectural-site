import React from 'react'
// import './Project1.css'
import PagesNav from '../../../pagesNav/PagesNav'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md'
import pro24 from '../images/pro24.jpeg'
import pro12 from '../images/pro12.jpeg'
import pro20 from '../images/pro20.jpeg'
import pro22 from '../images/pro22.jpeg'
import avata from '../images/avata.png'
import { FaCheck, FaQuoteLeft } from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { Pagination } from "swiper";
const Project4 = () => {
  return (
    <div className='project1'>
    <PagesNav/>
    <div className="planBg projectsbg">
      <div>
        <h1>
          <span>OUR</span> PROJECTS
        </h1>
        <div className='ongoining'>
          <span >
            You are here: <Link to="/">Home</Link>{" "}
            <MdOutlineKeyboardDoubleArrowRight /><Link to="/projects">Projects</Link><MdOutlineKeyboardDoubleArrowRight /> Ongoing <MdOutlineKeyboardDoubleArrowRight /> Project 4
          </span>
        </div>
      </div>
    </div> 
      <div className="projectsContent">
            <div className='infoInfo'>
              <img src={pro22} alt="img" />
              <div className="projectsContent__details">
                  <h3>PROJECT DETAILS</h3>
                  <div className='detailsInfo'>

                  <p>
                      <p>Category:</p>
                      <p className=' cost font-bold italic'>Ongoing</p>
                  </p>
                  <p>
                      <p>Location:</p>
                      <p className='cost font-bold italic'>Ghana</p>
                  </p>
                  <p>
                      <p>Surface Area:</p>
                      <p className='cost font-bold italic'>"50 x 50" feet</p>
                  </p>
                  <p>
                      <span>Completed:</span>
                      <span className='cost font-bold italic'>2022</span>
                  </p>
                  </div>
                 
              </div>
            </div>
      </div>
        <div className="project__details">
          <h3>PROJECT DETAILS</h3>
           <ul>
            <li> < FaCheck className='text-[#fbb600]'/>  Construction of a 3 unit apartment</li>
            <li> < FaCheck className='text-[#fbb600]'/> Electrical and plumbing installation.</li>
            <li> < FaCheck className='text-[#fbb600]'/> Block work, fixtures and fittings.</li>
            <li> < FaCheck className='text-[#fbb600]'/> Roof Installation.</li>
           </ul>
        </div>

        <div className="client__says">
          <div className='swiper__img'>

          <Swiper 
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          >
             <SwiperSlide> <img src={pro24} alt="img" /> </SwiperSlide>
            <SwiperSlide><img src={pro12} alt="img" /></SwiperSlide>
           <SwiperSlide><img src={pro20} alt="img" /></SwiperSlide>
          </Swiper>
          </div>
          
             <div>
              <h3>OUR CLIENT SAYS</h3>
                <div className="quoteSwiper">
                  <Swiper
                   pagination={{
                    dynamicBullets: true,
                  }}
                  modules={[Pagination]}
                    className="quoteSwiper2" 
                  >
                    <SwiperSlide>
                    <div className='quote__box'>
                <p >
                <FaQuoteLeft className='text-[gray]' />
                  I have been happy with the service provided by MashaAllah Construction. 
                  He always return my calls quickly and has anwered all my calls
                </p>
                  <div className='avata'>
                      <img src={avata} alt="img" />
                      <p>
                         <span>Mubarrak Fiifi</span> <br />
                         <span className='font-bold'>Chief Architect</span>
                      </p>
                  </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='quote__box'>
                <p >
                <FaQuoteLeft className='text-[gray]' />
                  I have been happy with the service provided by MashaAllah Construction. 
                  He always return my calls quickly and has anwered all my calls
                </p>
                  <div className='avata'>
                      <img src={avata} alt="img" />
                      <p>
                         <span>Mubarrak Fiifi</span> <br />
                         <span className='font-bold'>Chief Architect</span>
                      </p>
                  </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='quote__box'>
                <p >
                <FaQuoteLeft className='text-[gray]' />
                  I have been happy with the service provided by MashaAllah Construction. 
                  He always return my calls quickly and has anwered all my calls
                </p>
                  <div className='avata'>
                      <img src={avata} alt="img" />
                      <p>
                         <span>Mubarrak Fiifi</span> <br />
                         <span className='font-bold'>Chief Architect</span>
                      </p>
                  </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='quote__box'>
                <p >
                <FaQuoteLeft className='text-[gray]' />
                  I have been happy with the service provided by MashaAllah Construction. 
                  He always return my calls quickly and has anwered all my calls
                </p>
                  <div className='avata'>
                      <img src={avata} alt="img" />
                      <p>
                         <span>Mubarrak Fiifi</span> <br />
                         <span className='font-bold'>Chief Architect</span>
                      </p>
                  </div>
                    </div>
                    </SwiperSlide>
                
                  </Swiper>
             
              {/* <div className='quote__box'>
                <p >
                <FaQuoteLeft className='text-[gray]' />
                  I have been happy with the service provided by MashaAllah Construction. 
                  He always return my calls quickly and has anwered all my calls
                </p>
                  <div className='avata'>
                      <img src={avata} alt="img" />
                      <p>
                         <span>Mubarrak Fiifi</span> <br />
                         <span className='font-bold'>Chief Architect</span>
                      </p>
                  </div>
              </div> */}
             
                </div>
             
              
             </div>
              
        </div>
  </div>
  )
}

export default Project4
