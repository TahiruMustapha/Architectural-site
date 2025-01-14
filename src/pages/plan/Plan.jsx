import React from 'react'
import PagesNav from '../../pagesNav/PagesNav'
import 'animate.css'
import './Plan.css'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import img12 from './images2/img12.webp'
import img15 from './images2/img15.webp'
import img18 from './images2/img18.webp'
import img21 from './images2/img21.webp'
import { PlanData } from './PlanData'
//import { useState } from 'react'
const Plan = () => {
  // const [images, setImages] = useState(0);
  return (
    <>
    <PagesNav/>
    <div className='plan'>
         
    <div className="planBg">
      <div>
        <h1><span>OUR</span> PLANS</h1>
        <div>
          <span>You are here: <Link to='/'>Home</Link> <MdOutlineKeyboardDoubleArrowRight/> Products </span>
        </div>
      </div>
    </div>
    <div className="planInfo">
      <div className="planInfoSearch">
              <h3 className='inputbox'>SEARCH</h3>
              <input type="text" placeholder='Search products...' /> <br />
               <button>SEARCH</button>
               
               <div className="categoriesInfo">
                   <h3>CATEGORIES</h3>
                   <div>
                   <p><Link>2 Bedrooms <span>(2)</span></Link></p>   
                   <p><Link>3 Bedrooms <span>(4)</span></Link></p>  
                   <p><Link>4 Bedrooms <span>(5)</span></Link></p> 
                   <p><Link>5 Bedrooms <span>(6)</span></Link></p> 
                   <p><Link>6 Bedrooms <span>(1)</span></Link></p> 
                   <p><Link>7 Bedrooms <span>(1)</span></Link></p> 
                   <p><Link>8 Bedrooms <span>(3)</span></Link></p> 
                   <p><Link>Apartment <span>(3)</span></Link></p> 
                   <p><Link>Commercial Buldings <span>(1)</span></Link></p> 
                   <p><Link>Mordern Villa <span>(14)</span></Link></p>  
                   <p><Link>Uncategorized<span>(1)</span></Link></p> 
                   </div>
                   
               </div>
               <div className="topRated">
                <h3>TOP RATED</h3>
                <div>
                  <p>
                    <span>Villa House Plan-v12</span> <br />
                    <span><strike>GHS6,000.00</strike> GHS5,500.00</span>
                  </p>
                   <img src={img12} alt="img" className="topRatedImg" />
                </div>
                <div>
                  <p>
                    <span>Villa House Plan-v43</span> <br />
                    <span><strike>GHS6,000.00</strike> GHS5,500.00</span>
                  </p>
                   <img src={img15} alt="img" className="topRatedImg" />
                </div>
                <div>
                  <p>
                    <span>Comtemporary House Plan</span> <br />
                    <span><strike>GHS6,000.00</strike> GHS5,500.00</span>
                  </p>
                   <img src={img18} alt="img" className="topRatedImg" />
                </div>
                <div>
                  <p>
                    <span>Villa House Plan-v32</span> <br />
                    <span><strike>GHS6,000.00</strike> GHS5,500.00</span>
                  </p>
                   <img src={img21} alt="img" className="topRatedImg" />
                </div>
               </div>
      </div>
      <div className="planInfoContent">
         <div className="sort">
          <p>Showing 1-12 of 51 results</p>
          <select placeholder='Default Sorting'>
             <option>Default Sorting</option>
             <option>Sort By Popularity</option>
             <option>Sort By Average Rating</option>
             <option>Sort By Latest</option>
             <option>Sort By Price: low to high</option>
             <option>Sort By Price:high to low</option>
          </select>
         </div>
         <div className="contentGallery">
              
                 {
                  PlanData.map((img)=>{
                     return(
                      <div className='imgGallery'>
                        <img src={img.image} alt='img' loading='lazy' />
                        <p>{img.info}</p>
                        <span className='prevPrice'>{img.prevPrice}</span>
                        <span className='price'>{img.price}</span> <br />
                        <button>{img.cart}</button>
                      </div>
                     )
                  })
                 }
             
         </div>

      </div>
    </div>
    </div>
    </>
    
  )
}

export default Plan
