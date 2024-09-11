import React, { useEffect, useState, useMemo } from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import CustomNode from './CustomNode/CustomeNode'; 
import 'reactflow/dist/style.css'; 
import CustomEdge from './CustomEdge';
import options from "../Data/Options.json"; 

const DropArea = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [active, setActive] = useState(1)

  useEffect(() => {
    const initializeNodes = () => {
      const initialNodes = [
        {
          id:"1",
          type:"customNode",
          position:{x:100, y:100},
          data:{
            id: 1,
            label:"Workflow",
            allowedItems:["Work Flow"],
            active,
            setActive
          }
        },
        {
          id:"2",
          type:"customNode",
          position:{x:450, y:300},
          data:{
            id:2,
            label:"Architecture",
            allowedItems:["Architecture"],
            active,
            setActive
          }
        },
        {
          id:"3",
          type:"customNode",
          position:{x:800, y:100},
          data:{
            id:3,
            label:"Foundational Model",
            allowedItems:["Foundational Models"],
            active,
            setActive

          }
        },
        {
          id:"4",
          type:"customNode",
          position:{x:1150, y:300},
          data:{
            id:4,
            label:"Embedding Model",
            allowedItems:["Embedding Models"],
            active,
            setActive
          }
        },
        {
          id:"5",
          type:"customNode",
          position:{x:800, y:600},
          data:{
            id:5,
            label:"Vector Databases",
            allowedItems:["Vector Databases"],
            active
          }
        },
      ];
   


      setNodes(initialNodes);

      const initialEdges = [
        { id: "e1-2", source: '1', target: '2', type: 'custom' },
        { id: 'e2-3', source: '2', target: '3', type: 'custom' },
        { id: 'e3-4', source: '3', target: '4', type: 'custom' },
        { id: 'e4-5', source: '4', target: '5', type: 'custom' },
      ];

      setEdges(initialEdges);
    };

    initializeNodes();
  }, []);

  const nodeTypes = useMemo(() => ({
    customNode: CustomNode
  }), []);

  const edgeTypes = useMemo(() => ({
    custom: CustomEdge
  }), []);
  return (
    <div className='p-2 m-3' style={{ height: '95vh', width: '80vw' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        proOptions={{ hideAttribution: true }}
        zoomOnScroll={false}
        zoomOnPinch={false}
        panOnScroll={false}
      >
        <Background size={2} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default DropArea;
