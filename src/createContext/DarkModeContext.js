import { createContext , useReducer } from "react";

import DarkModeReducer from "./DarkModeReducer";
const initial_state={
    darkMode:false,
}


export const  darkModeCreateContext=createContext(initial_state);

export const DarkModeProvider=({children})=>{
    const [state,dispatch]=useReducer(DarkModeReducer,initial_state)


    return(<darkModeCreateContext.Provider  value={{darkMode:state.darkMode,dispatch}}>
        {children}
    </darkModeCreateContext.Provider>)

}