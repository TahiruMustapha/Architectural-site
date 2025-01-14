import React from 'react'
import "./Client.css"
import {GiElectricalSocket, GiSteelClaws} from "react-icons/gi"
import {BiKey} from "react-icons/bi"
import {MdArchitecture, MdCarpenter, MdConstruction, MdPlumbing, MdRoofing} from "react-icons/md"
const Client = () => {
  return (
    <div className='client'>
        <div className="clientInfo">
        <h2 className="title font-bold  text-xl tracking-widest pb-2 ">
        OUR CLIENTS
       
      </h2>
           <div>
            <p><MdArchitecture/></p>
              <p> <MdCarpenter/></p>
             <p><MdConstruction/></p>
              <p><MdPlumbing/></p>
              <p><MdRoofing/></p>
              <p><GiElectricalSocket/></p>
              <p> <MdCarpenter/></p>
             <p><GiSteelClaws/></p>
              <p><BiKey/></p>
            <p>  <MdArchitecture/></p>
            <p><MdRoofing/></p>
              <p> <MdConstruction/></p>
             
           </div>
        </div>
        
      
    </div>
  )
}

export default Client
