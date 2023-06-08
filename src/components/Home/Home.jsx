import React from 'react'
import "./Home.css"
import { useState,useEffect } from 'react'
import {IoIosArrowForward,IoIosArrowBack} from "react-icons/io"
import { HomeData } from './HomeData'
import WhoWeAre from '../whoWeAre/WhoWeAre'
import OurService from '../Our Service/OurService'
import News from '../News/News'
import Testimonial from '../Testimonials/Testimonial'
import Client from '../Clients/Client'



const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLenght = HomeData.length;
     // slideLenght = 3
     // setCurrentSlide = 0,1,2
     const autoScroll = true;
     let slideInterval;
     const intervalTime = 5000;

     const nextSLide=() => { 
         setCurrentSlide(currentSlide === slideLenght-1 ? 0 : currentSlide + 1)
      }
     const prevSLide=() => { 
         setCurrentSlide(currentSlide === 0 ? slideLenght - 1 : currentSlide - 1)
      }
      function auto() {
        slideInterval = setInterval(nextSLide , intervalTime)
      }
    useEffect(()=>{
      if(autoScroll){
            auto();
      }
      return ()=> clearInterval(slideInterval);
    }, [currentSlide]);
    useEffect(()=>{
      setCurrentSlide(0)
    }, []);
  return (
    <>
    <div className='Slider  w-[100%] h-[90vh] relative overflow-hidden'>
        <IoIosArrowBack className=' border-white w-8 h-8 border-radius-[50%] absolute cursor-pointer z-[999] text-white bg-transparent rounded-[50%] hover:bg-white hover:text-[gray] top-[35%] left-6   arrow prev' onClick={prevSLide}/>
        <IoIosArrowForward className=' border-white w-8 h-8 border-radius-[50%] absolute cursor-pointer z-[999] text-white  bg-transparent rounded-[50%] hover:bg-white hover:text-[gray] top-[35%] right-6   arrow next' onClick={nextSLide}/>
       
          {
            HomeData.map((slide,index)=>{
                 return (
                    <div className={index === currentSlide ? " absolute top-0 left-0 w-[100%] h-full  ease-[0.5s]  slide currrent" : "slide"} key = {index}>
                        {index === currentSlide && (
                          <>
                            <img className='h-full  object-cover w-[100%]' src={slide.image} alt="slide" />
                            <div className="content absolute top-[15rem] left-20  p-12 bg-[rgba(0,0,0,.3)] animate-bounce shadow-xl">
                                <h2 className='text-white mb-4' >{slide.heading}</h2>
                                <p className='text-white mb-4'>{slide.desc}</p>
                                <hr className='bg-[#ffb600] h-[2px] w-[50%] mb-4' />
                                <button class="bg-[#ffb700ea] hover:bg-[#ffb600] text-white font-bold py-2 px-4 rounded">
                                  Get Started</button>
                            </div>
                          </>
                            
                            
                        )}

                    </div>
                 )
            })
          }

      
    </div>
    <div className='bottomDesign w-[100%] h-20 bg-[#ffb600]'></div>
    <WhoWeAre/> 
    <OurService/>
    <News/>
    <Testimonial/>
    <Client/>
    </>
  )
}

export default Home
