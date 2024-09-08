import React, { useEffect, useState } from 'react'
import Items from '../ItemsComponent/Items'
import data from '../../Data/Options.json'
const DropitemsOption = () => {

  const [optionsData, setOptionsData] = useState(null)
useEffect(()=>{

  const keys = Object.keys(data)
  if(keys){
    setOptionsData(keys)
  }

},[])


  return (
    <div className='h-[95vh] w-96 bg-customBlue rounded flex flex-col items-center p-2.5 overflow-y-auto  shadow ' >
      {
        optionsData?.map((key)=>{
          return(
            
            <Items key={key} heading={key} flowData = {data[key]}/>
          )
        })
      }
    
  
    </div>
  )
}

export default DropitemsOption
