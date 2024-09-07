import React from 'react'

const DraggableItem = ({item}) => {


  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', item); 
  };
  return (
    <div
    draggable
    onDragStart={handleDragStart}
    style={{
      padding: '10px',
      margin: '10px 0',
      backgroundColor: 'lightgray',
      cursor: 'grab',
    }}
  >
    {item[1]}
  </div>
  )
}

export default DraggableItem
