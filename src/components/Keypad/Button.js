import React from "react";
import './button.css'
export const NumberBtn=({className,clickHandler,value})=>{
    return(
             <button className={className} onClick={clickHandler} value={value}>{value}</button>
    )
}


export const SymbolBtn=({className,clickHandler,value})=>{
    return(
             <button className={className} onClick={clickHandler} value={value}>{value}</button>
    )
}

