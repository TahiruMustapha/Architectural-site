import React from 'react'
import "./Gallery.css"
import PagesNav from '../../pagesNav/PagesNav'
import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import pro7 from './imgPro/pro7.webp'
import pro12 from './imgPro/pro12.webp'
import pro20 from './imgPro/pro20.webp'
import pro23 from './imgPro/pro23.webp'
import img6 from './images2/img6.webp'
import img7 from './images2/img7.webp'
import img8 from './images2/img8.webp'
import img9 from './images2/img9.webp'
import img13 from './images2/img13.webp'
import img14 from './images2/img14.webp'
import img15 from './images2/img15.webp'
import img21 from './images2/img21.webp'
import img22 from './images2/img22.webp'
import img23 from './images2/img23.webp'

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
        <img loading='lazy' className='w-full object-cover rounded' src={pro12} alt='img' />
        <img loading='lazy' className='w-full  object-cover rounded' src={pro7} alt='img' />       
        <img loading='lazy' className='w-full object-cover rounded' src={pro20} alt='img' />  
       <img loading='lazy' className='w-full  object-cover rounded' src={pro23} alt='img' /> 
       <img loading='lazy' className='w-full  object-cover rounded' src={img6} alt='img' /> 
       <img loading='lazy' className='w-full  object-cover rounded' src={img7} alt='img' /> 
       <img loading='lazy' className='w-full  object-cover rounded' src={img8} alt='img' /> 
       <img loading='lazy' className='w-full  object-cover rounded' src={img9} alt='img' />   
       <img loading='lazy' className='w-full  object-cover rounded' src={img13} alt='img' /> 
       <img loading='lazy' className='w-full  object-cover rounded' src={img14} alt='img' /> 
       <img loading='lazy' className='w-full  object-cover rounded' src={img15} alt='img' /> 
       <img loading='lazy' className='w-full  object-cover rounded' src={img21} alt='img' /> 
       <img loading='lazy' className='w-full  object-cover rounded' src={img22} alt='img' /> 
       <img loading='lazy' className='w-full  object-cover rounded' src={img23} alt='img' />  

      
       
       
         
          
          
   
        </SlideshowLightbox>
    </div>
  )
}

export default Gallery
