import React, { useState } from 'react'
import { BiSolidDownArrow } from "react-icons/bi";
import "./Items.css"
import DraggableItem from '../DraggableItem/DraggableItem';
const Items = ({heading, flowData}) => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () =>{
        setToggle((prev) =>!prev)

    }
  return (
    <div className='items__container shadow'>
        <div className='heading__container'>
            <p>{heading}</p>
            <BiSolidDownArrow size={28} color='#5A5A5A' onClick={handleToggle} className='items__downArrow'/>


        </div>
      
      {toggle ? <div className='options__container'>
        {
          flowData[0].options.map((elm)=>{
            return(
             <DraggableItem key={elm} item={[heading,elm]}/>
            )
          })
        }

        </div> :""}
        
    </div>
  )
}

export default Items
