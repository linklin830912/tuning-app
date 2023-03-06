import style from "./style.module.css"

import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hook";
import { createAccount, createAnalysis, createRecord, loginAccount } from "../../../feature/mode/functionModeSlice";

type functionModePanelProps = {

}
export const FunctionModePanel = (props:functionModePanelProps)=>{
    const dispatch = useAppDispatch();
    const functionMode = useAppSelector(state=>state.functionMode.mode);

    return (
        <>
            <div className={style.functionModePanel_container_div}>
                {/* <div >temp
                    {functionMode}
                </div> */}                
                <button className='record_mode_button' onClick={
                    ()=>dispatch(createRecord())}
                >record</button>
                <button className='analysis_mode_button' onClick={
                    ()=>dispatch(createAnalysis())}
                >analysis</button>
                <button className='signin_mode_button' onClick={
                    ()=>dispatch(createAccount())}
                >signin</button>
                <button className='login_mode_button'onClick={
                    ()=>dispatch(loginAccount())
                }>login</button>               
            </div>            
        </>
    )
}