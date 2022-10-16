import { createContext, useReducer } from "react";
import reducer from "./reducer";


export const ContextProvider = createContext();

const initialState ={
    login :"login",
    password:"password",
    allow:false
}

export default function DistributeContext({children}){
    const [value,dispatch] = useReducer(reducer,initialState);

    value.setLogin = (login) =>{ dispatch({type:"LOGIN", payload:login}) }
    value.setPassword = (password)=>{dispatch({type:"PASSWORD",payload:password})}
    value.setAllow = (allow) => {dispatch({type:"ALLOW", payload:allow })}
    return(
        <ContextProvider.Provider value={value}>
            {children}
        </ContextProvider.Provider>
    )
}
