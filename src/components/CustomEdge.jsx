import React from 'react';
import { getBezierPath } from 'reactflow';

const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}) => {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <g>
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="10"
          refY="3.5"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="gray" />
        </marker>
      </defs>

      <path
        id={id}
        style={{
          stroke: 'gray',           
          strokeWidth: 2,           
          strokeDasharray: '5 5',   
          ...style,
        }}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd="url(#arrowhead)"
      />
    </g>
  );
};

export default CustomEdge;
