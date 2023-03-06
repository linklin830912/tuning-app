import style from "./style.module.css";

import { FunctionModePanel } from '../panel/mode/FunctionModePanel';
import { ThemeModePanel } from '../panel/mode/ThemeModePanel';
import { LoginPanel } from '../panel/mode/LoginPanel';
import { RecordPanel } from '../panel/record/RecordPanel';
import { IntervalPanel } from '../panel/record/IntervalPanel';

import React from "react";

type WebFormatProps = {
    children: string | JSX.Element | JSX.Element[] 
}
export const WebFormat = (props:WebFormatProps)=>{
    return (
        <>
            <div className={style.web_format_container_div}>
                <div className={style.mode_section_container_div}>
                    <div className={style.function_mode_panel_div}>
                        <FunctionModePanel/>
                    </div>
                    <div className={style.login_panel_div}>
                        <LoginPanel isLogin={false}/>
                    </div>
                    <div className={style.theme_mode_panel_div}>
                        <ThemeModePanel/>
                    </div>
                </div>

                <div className={style.children_section_container_div}>
                    <div className={style.temp_div}></div>
                    {/* {props.children} */}
                </div>
                
                
                <div className={style.tuning_section_container_div}>
                    <IntervalPanel/>
                    <RecordPanel/>
                </div>
            </div>
            
        </>
    );
}