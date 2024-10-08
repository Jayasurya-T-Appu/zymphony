import React from 'react'

const DraggableItem = ({item}) => {


  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', item); 
  };
  return (
    <div
    draggable
    onDragStart={handleDragStart}
    // style={{
    //   padding: '10px',
    //   margin: '10px 0',
    //   backgroundColor: 'lightgray',
    //   cursor: 'grab',
    // }}
    className='my-2 p-2 cursor-grab bg-stone-400 rounded font-semibold'
  >
    {item[1]}
  </div>
  )
}

export default DraggableItem
