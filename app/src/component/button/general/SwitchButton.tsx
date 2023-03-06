import React, {useState, useEffect} from "react";
import style from "../style.module.css"

type switchButtonProps={
    onChange: (x:boolean)=>void;
}
export const SwitchButton = (props: switchButtonProps)=>{

    const [checked, setChecked] = useState<boolean>(false);
    useEffect(()=>{
        props.onChange(checked);
    },[checked])

    return (
        <>
            <div className={checked?`${style.switch_button_track_div} ${style.checked}`:
                    `${style.switch_button_track_div} ${style.unchecked}`}>
                <div>
                    <input type="checkbox" className={style.switch_thumb_input} onChange={
                        ()=>{
                            setChecked(!checked)
                        }
                    }></input>
                    <label></label>
                </div>
            </div>
        </>
    );
}