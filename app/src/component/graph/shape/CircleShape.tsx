import { point } from "../../../type/point"
import { generalShapeProps } from "./type/generalShapeProps"

import React from 'react';

type CircleShapeProps = {
    center:point;
    radius:number;
} & generalShapeProps

export const CircleShape = (props:CircleShapeProps)=>{
    return (
        <g id="circleShape">
            <circle cx={props.center.x} cy={props.center.y} 
            r={props.radius} 
            fill={props.backgroundColor}
            stroke={props.strokeColor} 
            stroke-width={props.strokeWidth} />
        </g>
   
    );
}