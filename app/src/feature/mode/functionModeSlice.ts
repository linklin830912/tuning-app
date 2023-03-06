import { createSlice } from "@reduxjs/toolkit";
import { functionModeType } from "./functionModeType"

interface functionMode  {
    mode: functionModeType
}
const initialState : functionMode = {
    mode: functionModeType.Record
}

export const functionModeSlice = createSlice({
    name: "functionMode",
    initialState: initialState,
    reducers:{
        createRecord: state=>{
            state.mode = functionModeType.Record;
        },
        createAccount: state=>{
            state.mode = functionModeType.Accout;
        },
        loginAccount: state=>{
            state.mode = functionModeType.Accout;
        },
        createAnalysis: state=>{
            state.mode = functionModeType.Analysis;
        }
    }
})

export const {createRecord, createAccount, createAnalysis, loginAccount} = functionModeSlice.actions;
export default functionModeSlice.reducer;