import * as React from "react";
import NumberList from "./NumberButton"

let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let calculations = ["+", "-", "*", "/"]
let App = () => {
    const [calculator, setCalculator] = React.useState(" ");

    function update(e) {
        let i = calculator;

        if (calculator.substr(-1) != "+" && calculator.substr(-1) != " ") {
            setCalculator(calculator + e.target.value);
        }
    }

    function calculatorFuc() {
        let i = calculator;
        if (calculator.substr(-1) != "+" && calculator.substr(-1) != " " ) {
            i = eval(calculator).toString();
        };
        setCalculator((calculator) => {
            return i
        });
    }

    function calculatorClear() {
        setCalculator((calculator) => {
            return ""
        });
    }
    return <div>
        <NumberList numbers={numbers} setCalculator={setCalculator} calculator={calculator} />
        <button key="+" value="+" style={{ color: 'red' }} onClick={update}>+</button>
        <button key="=" value="=" style={{ color: 'red' }} onClick={calculatorFuc}>=</button>
        <button key="clear" value="clear" style={{ color: 'red' }} onClick={calculatorClear}>clear</button>
        <div>{calculator}</div>
    </div>
}

export default App;