import React from 'react'
import "./OurService.css"
import {GiElectricalSocket, GiSteelClaws} from "react-icons/gi"
import {MdArchitecture, MdCarpenter, MdConstruction, MdPlumbing, MdRoofing} from "react-icons/md"
import {BiKey} from "react-icons/bi"
const OurService = () => {
  return (
    <div className='ourService'>
    <h2 className="title font-bold text-xl tracking-widest pb-2 ">
        OUR SERVICES
       
      </h2>
      <div className="servicesBox  flex items-center">

      <div className="service1">
         <div className='flex items-center '>
         <MdConstruction className='m-4'/>
         <p>
            <h3>Building Construction</h3>
            <span>Commercial Construction</span> <br />
            <span>Residential Construction</span> <br />
            <span>Renovation</span>
         </p>
         </div>

         <div className='flex items-center '>
         <MdPlumbing className='m-4'/>
         <p>
            <h3>Plumbing Installation</h3>
            <span>Commercial</span> <br />
            <span>Residential</span>
         </p>
         </div>
          
         <div className='flex items-center '>
         <MdCarpenter className='m-4'/>
         <p>
            <h3>Carpentary Works</h3>
            <span>Commercial Flow & Roofing</span> <br />
            <span>Residential Flow & Lentil</span>
         </p>
         </div>

         <div className='flex items-center '>
         <GiSteelClaws className='m-4'/>
         <p>
            <h3>Steel Bending Works</h3>
            <span>Commercial Flow & Laying</span> <br />
            <span>Residential Flow Laying & Pillars</span>
         </p>
         </div>
   
       </div>
       <div className="service2">

       <div className='flex items-center '>
       <MdArchitecture className='m-4'/>
         <p>
            <h3>Architechtural Design</h3>
            <span>3D Visualization</span> <br />
            <span>Building Design, Interior Design, Structural Design</span>
         </p>
         </div>

       <div className='flex items-center '>
       <MdRoofing className='m-4'/>
         <p>
            <h3>Roofing Installation</h3>
            <span>Residential</span> <br />
            <span>Commercial & Industrial</span>
         </p>
         </div>

       <div className='flex items-center '>
       < GiElectricalSocket className='m-4'/>
         <p>
            <h3>Electrical Installation</h3>
            <span>Residential Wiring</span> <br />
            <span>Commercial & Industrial Wiring</span>
         </p>
         </div>

       <div className='flex items-center '>
       <BiKey className='m-4'/>
         <p>
            <h3>Others Services</h3>
            <span>Terrazzo & Tiles Experts</span> <br />
            <span>Demolishing Buildings</span>
         </p>
         </div>
       </div>
      </div>
       
    </div>
  )
}

export default OurService
