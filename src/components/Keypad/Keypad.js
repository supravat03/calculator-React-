import React from "react";
import './keypad.css'
import {NumberBtn, SymbolBtn} from "./Button";

const Keypad = ({clickHandler}) => {
    return (
        <div className='keypad'>

            <div><SymbolBtn className={"symbolBtn lightGrey"} clickHandler={clickHandler} value="("/></div>
            <div><SymbolBtn className={"symbolBtn lightGrey"} clickHandler={clickHandler} value=")"/></div>
            <div><SymbolBtn className={"symbolBtn lightGrey"} clickHandler={clickHandler} value="%"/></div>
            <div><SymbolBtn className={"symbolBtn lightGrey"} clickHandler={clickHandler} value="**"/></div>

            <div><SymbolBtn className={"symbolBtn lightGrey"} clickHandler={clickHandler} value="AC"/></div>
            <div><SymbolBtn className={"symbolBtn lightGrey"} clickHandler={clickHandler} value="/"/></div>
            <div><SymbolBtn className={"symbolBtn lightGrey"} clickHandler={clickHandler} value="Del"/></div>
            <div><SymbolBtn className={"symbolBtn orange"} clickHandler={clickHandler} value="+"/></div>

            <div><NumberBtn className={"numberBtn"} clickHandler={clickHandler} value="7"/></div>
            <div><NumberBtn className={"numberBtn"} clickHandler={clickHandler} value="8"/></div>
            <div><NumberBtn className={"numberBtn"} clickHandler={clickHandler} value="9"/></div>
            <div><SymbolBtn className={"symbolBtn orange"} clickHandler={clickHandler} value="-"/></div>

            <div><NumberBtn className={"numberBtn"} clickHandler={clickHandler} value="4"/></div>
            <div><NumberBtn className={"numberBtn"} clickHandler={clickHandler} value="5"/></div>
            <div><NumberBtn className={"numberBtn"} clickHandler={clickHandler} value="6"/></div>
            <div><SymbolBtn className={"symbolBtn orange"} clickHandler={clickHandler} value="*"/></div>

            <div><NumberBtn className={"numberBtn"} clickHandler={clickHandler} value="3"/></div>
            <div><NumberBtn className={"numberBtn"} clickHandler={clickHandler} value="2"/></div>
            <div><NumberBtn className={"numberBtn"} clickHandler={clickHandler} value="1"/></div>
            <div><SymbolBtn className={"symbolBtn orange"} clickHandler={clickHandler} value="/"/></div>

            <div><NumberBtn className={"numberBtn"} clickHandler={clickHandler} value="."/></div>
            <div><NumberBtn className={"numberBtn"} clickHandler={clickHandler} value="0"/></div>
            <div className="colSpan"><SymbolBtn className={"symbolBtn orange equalBtn"} clickHandler={clickHandler}
                                                value="="/></div>

        </div>
    );
};

export default Keypad;
