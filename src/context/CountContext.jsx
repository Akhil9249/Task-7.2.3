import { createContext, useState } from "react";

export const CountContext = createContext()

export const CountProvider = ({children})=>{
    
    const [count, setCount] = useState(0);
    const countIncrement =()=>{
       setCount(prev =>{
         if(prev<10){
            return prev+1
         }
         return prev
       })
    }
    const countdecrement =()=>{
       setCount(prev =>{
         if(prev>0){
            return prev-1
         }
         return prev
       })
    }
    return <CountContext.Provider value={{count,countIncrement,countdecrement}}>{children}</CountContext.Provider>
}