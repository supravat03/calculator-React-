import React from "react";
import './display.css'



const display = ({expression,changeHandler,result}) => {
  return (
    <div className='display'>
      <input  type="text" value={expression} onChange={changeHandler} />
      <input type="text" dir="rtl" value={result} readOnly />
    </div>
  );
};

export default display;
