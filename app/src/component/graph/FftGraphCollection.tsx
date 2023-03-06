import React from 'react';
import { FftGraphUnit } from './FftGraphUnit';

type FftGraphCollectionProps = {
    href:string;
}
export const FftGraphCollection = (props:FftGraphCollectionProps)=>{
    return (
        <>
            <svg width="250" height="250">
                <symbol id="tempCircle">
                    <circle  cx="25" cy="25" r="50" />
                </symbol>
                
                <FftGraphUnit 
                            width={10}
                            height={10}
                            center={{x:5, y:5}}
                            children={1}
                            backgroundColor= {"orange"}
                            strokeColer= {"pink"}
                            strokeWidth= {1}
                            href={props.href}
                        />
            </svg>
            <div>collection</div>
        </>
    );
}