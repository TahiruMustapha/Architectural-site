import React from 'react'
import "./Home.css"
import 'animate.css';
import { useState,useEffect } from 'react'
import {IoIosArrowForward,IoIosArrowBack} from "react-icons/io"
import { HomeData } from './HomeData'
import WhoWeAre from '../whoWeAre/WhoWeAre'
import OurService from '../Our Service/OurService'
import News from '../News/News'
import Testimonial from '../Testimonials/Testimonial'
import Client from '../Clients/Client'
import Navbar from '../../navBar/Navbar';



const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLenght = HomeData.length;
     const autoScroll = true;
     let slideInterval;
     const intervalTime = 8000;

     const nextSLide=() => { 
         setCurrentSlide(currentSlide === slideLenght-1 ? 0 : currentSlide + 1)
      }
     const prevSLide=() => { 
         setCurrentSlide(currentSlide === 0 ? slideLenght - 1 : currentSlide - 1)
      }
      const  auto=  ()=> { 
        slideInterval = setInterval(nextSLide , intervalTime) 
      };
      
    useEffect(()=>{
     
      if(autoScroll){
            auto();
      }
     
      return ()=> clearInterval(slideInterval);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSlide,autoScroll,slideInterval]);
    
    useEffect(()=>{
      
      setCurrentSlide(0)
    }, []);
  return (
    <>
    <Navbar/>
    <div className='Slider  w-[100%] h-[90vh] relative overflow-hidden'>
        <IoIosArrowBack className=' border-white w-8 h-8 border-radius-[50%] absolute cursor-pointer z-[999] text-white bg-transparent rounded-[50%] hover:bg-white hover:text-[gray] top-[35%] left-6   arrow prev' onClick={prevSLide}/>
        <IoIosArrowForward className=' border-white w-8 h-8 border-radius-[50%] absolute cursor-pointer z-[999] text-white  bg-transparent rounded-[50%] hover:bg-white hover:text-[gray] top-[35%] right-6   arrow next' onClick={nextSLide}/>
       
          {
            HomeData.map((slide,index)=>{
                 return (
                    <div className={index === currentSlide ? " animate__animated animate__rollIn animate__slower  absolute top-0 left-0 w-[100%] h-full  slide currrent" : "slide"} key = {index}>
                        {index === currentSlide && (
                          <>
                            <img className='h-full  object-cover w-[100%]'  src={slide.image} alt="slide" />
                            <div className=" absolute top-[5rem] left-20 ">
                              <h3 className=' inline-block animate__animated animate__bounceInDown animate__delay-3s content__h3 pb-2 mb-6 mt-8 text-white font-extrabold  '>MASHA ALLAH</h3>
                               <h1 className='animate__animated animate__bounceInDown animate__delay-4s font-extrabold text-[#ffb600] text-4xl mb-6'>Bring Dream To Reality</h1>
                            <button class="animate__animated animate__bounceInDown animate__delay-5s mt-8 bg-[#ffb700ea] hover:bg-[#ffb600] text-white font-bold py-2 px-4 rounded">
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
