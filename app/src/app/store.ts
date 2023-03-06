import { configureStore } from "@reduxjs/toolkit";
import functionModeReducer, { functionModeSlice } from "../feature/mode/functionModeSlice"

export const store = configureStore({
    reducer:{
        functionMode: functionModeReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;