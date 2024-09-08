import React, { useState } from 'react'
import { BiSolidDownArrow } from "react-icons/bi";
import DraggableItem from '../DraggableItem/DraggableItem';
const Items = ({heading, flowData}) => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () =>{
        setToggle((prev) =>!prev)

    }
  return (
    <div className='w-full mb-[10px] bg-white rounded-[10px] flex flex-col justify-between p-[10px] items-center transition-all duration-200 ease-in-out hover:transform hover:translate-x-[-1px] hover:translate-y-[1px] cursor-pointer'>
        <div className='w-[90%] flex items-center justify-between'>
            <p className='font-semibold text-[26px]'>{heading}</p>
            <BiSolidDownArrow size={28} color='#5A5A5A' onClick={handleToggle} className='items__downArrow'/>


        </div>
      
      {toggle ? <div className='w-full border-t border-green-500 mt-[10px]'>
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
