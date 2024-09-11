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
  const Activate=() =>{
  
    data.setActive(data.id)
    console.log(data.active);
    

  }

  const renderHandles = () => {

    switch (data.label) {
      case 'Workflow':
        return (
          <>
            <Handle type="source" position={Position.Right} id="right" style={{ background: '#555' }} />
        
          </>
        );
      case 'Architecture':
        
        return (
          <>
            <Handle type="source" position={Position.Right} id="right" style={{ background: '#555' }} />
            <Handle type="target" position={Position.Left} id="left" style={{ background: '#555' }} />
          </>
        );
      case 'Foundational Model':
        return (
          <>
            <Handle type="source" position={Position.Right} id="right" style={{ background: '#555' }} />
            <Handle type="target" position={Position.Left} id="top" style={{ background: '#555' }} />
          </>
        );
      case 'Embedding Model':
        return (
          <>
            <Handle type="source" position={Position.Left} id="top" style={{ background: '#555' }} />
            <Handle type="target" position={Position.Left} id="left" style={{ background: '#555' }} />
          </>
        );
      case 'Vector Databases':
        return (
          <>
     
            <Handle type="target" position={Position.Top} id="left" style={{ background: '#555' }} />
          </>
        );
  
    }
  };

  return (
    <div onDrop={handleDrop} onDragOver={allowDrop} onClick={Activate} className={`min-w-[200px] min-h-[150px] ${data.active === data.id ? "bg-customPurple": ""} h-auto bg-gray-100 p-3 rounded-lg border border-gray-500 shadow-lg`}>
      <h4 className='text-[22px] font-medium text-center'>{data.label}</h4>
      <div className='overflow-hidden rounded-lg'>
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={index} className='w-full bg-customBlue p-1 text-[16px] font-semibold  flex justify-between items-center border-t border-l border-gray-300 shadow-lg  mb-1'>
            <p className='text-white'>{item}</p>
            <IoMdClose className='mx-1'  size={20} color='white'  onClick={() => removeItem(item)} />
          </div>
        ))
      ) : (
        <p className='drop_box_empty'></p>
      )}

      </div>
   
      
      {
renderHandles()
      }

    </div>
  );
};

export default CustomeNode;
