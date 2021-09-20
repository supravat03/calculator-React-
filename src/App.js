import React, {useState} from "react";
import "./App.css"
import Display from "./components/display/Display"
import Keypad from "./components/Keypad/Keypad";


const App = () => {
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState('0');


    const clickHandler = (e) => {
        const value = e.target.value;
        switch (value) {
            case "=":
                if (expression !== "") {
                    let ans = "";
                    try {
                        ans = eval(expression);
                    } catch (err) {
                        setResult("Error");
                    }
                    if (ans === undefined) {
                        setResult("Error");
                    } else setResult(ans);
                }
                break;
            case "AC":
                setExpression('')
                setResult("0");
                break;
            case "Del":
                let oldExpression = expression;
                let newExpression = oldExpression.substr(0, oldExpression.length - 1);
                setExpression(newExpression);
                break;
            default:
                setExpression(`${expression}${value}`);
                break;
        }
    };


    const changeHandler = (e) => {
        const {value}= e.target;
        setExpression(value);
    };

    return (
        <div className="app_wrapper">
            <Display expression={expression} changeHandler={changeHandler} result={result}/>

            <Keypad clickHandler={clickHandler}/>

        </div>
    );
};

export default App;
