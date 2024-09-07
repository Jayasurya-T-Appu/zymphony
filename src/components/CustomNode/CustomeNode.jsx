import React, { useState } from 'react';
import './CustomNode.css';
import { IoMdClose } from 'react-icons/io';
import { Handle } from 'reactflow';

const CustomeNode = ({ id, data }) => {
  const [items, setItems] = useState([]);

  // Handle item drop
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
    <div onDrop={handleDrop} onDragOver={allowDrop} className='drop_area shadow'>
      <h4 className='drop_box'>{data.label}</h4>
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={index} className='drop_box_item'>
            <p>{item}</p>
            <IoMdClose size={22} onClick={() => removeItem(item)} />
          </div>
        ))
      ) : (
        <p className='drop_box_empty'></p>
      )}
      

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
