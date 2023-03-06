import style from "./style.module.css";

import {point} from "../../type/point"
import { createViewBoxByCenterAndSize, covertViewBoxToSVGString } from "../../type/viewbox"

import React from "react";

type fftGraphUnitProps ={
    width: number,
    height: number,
    center: point,
    backgroundColor: string,
    strokeColer: string,
    strokeWidth: number,
    children: any
    href: string;
}

export const FftGraphUnit = (props: fftGraphUnitProps)=>{

    const viewbox =  createViewBoxByCenterAndSize(props.width, props.height, props.center);

    return (
        <>
            <use href={`#${props.href}`} x={0} y={0} fill={"pink"}/>
            <use href={`#${props.href}`} fill={"pink"} y={50}/>
            <use href={`#${props.href}`} fill={"transparent"} stroke={"blue"} strokeWidth={5}/>
            <div>hello tuner</div>
        </>
    );
}