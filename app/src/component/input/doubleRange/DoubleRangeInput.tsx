import React, {useState, useRef, useEffect} from 'react';
import style from "./style.module.css";

export const DoubleRangeInput = ()=>{
    const [step, setStep] = useState<number>(100);
    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(7500);

    const [valueWidth, setValueWidth] = useState<number | undefined>(0);
    const [valueX, setValueX] = useState<number | undefined>(0);

    const getMinOrMaxRange = (min:number, max:number)=>{
        if(min>=max && max-step>=0){
            setMinValue(max-step);
            setMaxValue(max);
        }else if(min>=max && max-step<0){
            setMinValue(0);
            setMaxValue(step);
        }else if(min>=max && min+step>7500){
            setMinValue(7500-step);
            setMaxValue(7500);
        }else{
            setMinValue(min);
            setMaxValue(max);
        }
    }

    const rangeRef = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        const rangeRect = rangeRef.current?.getClientRects()[0];
        setValueWidth(rangeRect?.width);
        setValueX(rangeRect?.x);

    }, [rangeRef])
    return (
        <>
        
            <div className={style.double_range_div} ref={rangeRef}>
                <div className={style.double_range_container_div} >
                    <div className={style.double_range_track_div}></div>
                    <div className={style.double_range_value_div} style={
                        {
                            left:`${(minValue/7500)*(valueWidth?valueWidth:1)}px`,
                            width:`${((maxValue-minValue)/7500)*(valueWidth?valueWidth:1)}px`
                        }
                    }></div>
                    <div className={style.double_range_illustrator_div}
                        style={{
                            left:`${(minValue/7500)*(valueWidth?valueWidth:1)}px`,
                            width:`${((maxValue-minValue)/7500)*(valueWidth?valueWidth:1)}px`
                        }}
                    > 
                        <div className={style.double_range_text_div}>{`${minValue} - ${maxValue}`}</div>
                    </div>
                </div>
                <input id="min_range_input" type="range" min={0} max={7500} step={step}
                    value={minValue}
                    onChange={
                        e=>{
                            getMinOrMaxRange(Number(e.target.value), maxValue);
                        }
                    }
                />
                <input id="max_range_input" type="range" min={0} max={7500} step={100}
                value={maxValue}
                    onChange={
                        e=>{
                            getMinOrMaxRange(minValue, Number(e.target.value));
                        }
                    }
                />
            </div>
        </>
    );
}