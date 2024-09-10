import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Handle, Position } from 'reactflow';

const CustomeNode = ({ data }) => {

  const [items, setItems] = useState([]);
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedItem = event.dataTransfer.getData('text');
    const [key, value] = droppedItem.split(',');


    if (data.allowedItems.includes(key) && !items.some(item => item === value)) {
      setItems(prevItems => [...prevItems, value]);
    } else if (!data.allowedItems.includes(key)) {
      alert(`Item "${key}" is not allowed to be dropped here.`);
    } else {
      alert(`Item "${value}" has already been added.`);
    }
  };


  const allowDrop = (event) => {
    event.preventDefault();
  };

  const removeItem = (itemToRemove) => {
    setItems(prevItems => prevItems.filter(item => item !== itemToRemove));
  };

  return (
    <div onDrop={handleDrop} onDragOver={allowDrop} className='min-w-[200px] min-h-[250px] bg-gray-100 p-3 rounded-lg border border-gray-500 shadow-lg'>
      <h4 className='text-[22px] font-medium text-center'>{data.label}</h4>
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={index} className='w-full bg-antiquewhite p-2.5 text-[18px] font-semibold my-1 flex items-center justify-between border-t border-l border-gray-300 shadow-lg shadow-gray-300 mb-2'>
            <p>{item}</p>
            <IoMdClose size={22} onClick={() => removeItem(item)} />
          </div>
        ))
      ) : (
        <p className='drop_box_empty'></p>
      )}
      
      {
        
      }

      <Handle
        type="source"
        position="right"
        id="right"
        style={{ background: '#555' }}
      />
      <Handle
        type="target"
        position="left"
        id="left"
        style={{ background: '#555' }}
      />
    </div>
  );
};

export default CustomeNode;
