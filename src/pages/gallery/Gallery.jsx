import React from 'react'
import "./Gallery.css"
import PagesNav from '../../pagesNav/PagesNav'
import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import pro7 from './images/pro7.jpeg'
import pro12 from './images/pro12.jpeg'
import pro20 from './images/pro20.jpeg'
import pro23 from './images/pro23.jpeg'
import img6 from './imgs/img6.jpg'
import img7 from './imgs/img7.jpg'
import img8 from './imgs/img8.jpg'
import img9 from './imgs/img9.jpg'
import img13 from './imgs/img13.jpg'
import img14 from './imgs/img14.jpg'
import img15 from './imgs/img15.jpg'
import img21 from './imgs/img21.jpg'
import img22 from './imgs/img22.jpg'
import img23 from './imgs/img23.jpg'

import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'


const Gallery = () => {
  return (
    <div>
      <PagesNav/>
      <div className="planBg projectsbg">
      <div>
        <h1>
          <span>OUR</span> GALLERY
        </h1>
        <div className='ongoining'>
          <span >
            You are here: <Link to="/">Home</Link>{" "}
            <MdOutlineKeyboardDoubleArrowRight />Gallery
          </span>
        </div>
      </div>
    </div> 
      <SlideshowLightbox className=' lightBoxImg mt-8 mb-8 container grid grid-cols-3 gap-2 mx-auto'>
        <img className='w-full  object-cover rounded' src={pro12} alt='img' />
        <img className='w-full  object-cover rounded' src={pro7} alt='img' />       
        <img className='w-full object-cover rounded' src={pro20} alt='img' />  
       <img className='w-full  object-cover rounded' src={pro23} alt='img' /> 
       <img className='w-full  object-cover rounded' src={img6} alt='img' /> 
       <img className='w-full  object-cover rounded' src={img7} alt='img' /> 
       <img className='w-full  object-cover rounded' src={img8} alt='img' /> 
       <img className='w-full  object-cover rounded' src={img9} alt='img' />   
       <img className='w-full  object-cover rounded' src={img13} alt='img' /> 
       <img className='w-full  object-cover rounded' src={img14} alt='img' /> 
       <img className='w-full  object-cover rounded' src={img15} alt='img' /> 
       <img className='w-full  object-cover rounded' src={img21} alt='img' /> 
       <img className='w-full  object-cover rounded' src={img22} alt='img' /> 
       <img className='w-full  object-cover rounded' src={img23} alt='img' />  

      
       
       
         
          
          
   
        </SlideshowLightbox>
    </div>
  )
}

export default Gallery
