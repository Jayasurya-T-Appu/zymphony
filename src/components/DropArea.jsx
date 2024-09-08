import React, { useEffect, useState, useMemo } from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import CustomNode from './CustomNode/CustomeNode'; 
import 'reactflow/dist/style.css'; 
import CustomEdge from './CustomEdge';
import options from "../Data/Options.json"; 

const DropArea = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    const initializeNodes = () => {
      const initialNodes = [];
      const keys = Object.keys(options);

      keys.forEach((key, index) => {
        const xPos = index * 350; 
        if (Array.isArray(options[key])) {
          initialNodes.push({
            id: (index + 1).toString(),
            type: 'customNode',
            position: { x: xPos, y: 100 }, 
            data: { 
              label: options[key][0].name,
              allowedItems: [key] 
            }
          });
        }
      });

      setNodes(initialNodes);

      const initialEdges = initialNodes.map((node, index) => {
        if (index < initialNodes.length - 1) {
          return {
            id: `e${index + 1}-${index + 2}`,
            source: node.id,
            target: (index + 2).toString(),
            type: 'custom'
          };
        }
        return null;
      }).filter(edge => edge !== null);

      setEdges(initialEdges);
    };
    console.log(edges);
    

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
