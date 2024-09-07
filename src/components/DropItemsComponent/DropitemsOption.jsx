import React, { useEffect, useState } from 'react'
import "./DropItemsOption.css"
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
    <div className='DropItemsOption__container shadow' >
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
