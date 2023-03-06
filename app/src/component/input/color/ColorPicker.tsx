import style from "./style.module.css"
import React, {useState} from 'react';

export const ColorPicker = ()=>{
    const [colorRange, setColorRange] = useState<number>(36);
    
    return (
        <>
            <div className={style.container_color_div}>
                {
                    new Array(colorRange).fill(0).map((color, index)=>(
                        <button key={index}></button>
                    ))
                }
            </div>
        </>
    );
}