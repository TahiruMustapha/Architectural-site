import React from 'react'
 import { useEffect, useState } from 'react';
 // import {BiSolidUpArrow} from 'react-icons/bi'
import { FaAngleUp } from 'react-icons/fa';
const SrollToTop = () => {
    const [showButton,setShowButton] = useState(false);
  useEffect( ()=>{
    // Button is displayed after scrowling for 300px
    const hanndleScrollButtonVissibility = ()=>{
      window.pageYOffset > 300 ? setShowButton(true):setShowButton(false);
    };
    window.addEventListener('scroll', hanndleScrollButtonVissibility);
    return () =>{
      window.removeEventListener('scroll', hanndleScrollButtonVissibility);
    };
  }, [] );
//   const goToTop = () => {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//     });
// }
  const handleScrollTop = ()=>{
    window.scrollTo({top:0,behavior:'smooth'});
  };
 
  return (
    
    <div>
         {
        showButton && (
          <div className=' top-to-btm '>
             <button
             className='fixed bottom-10 right-7 z-50 cursor-pointer p-1 w-8 h-8 bg-[#fbb600] hover:bg-[#111]'
             onClick={handleScrollTop}
             >
             <FaAngleUp
                    className="icon-position icon-style w-full h-full text-white   "
                    />
             </button>
               
           
          </div>
        )
       }
    </div>
  )
};

export default SrollToTop
