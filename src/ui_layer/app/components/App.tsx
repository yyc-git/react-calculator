import * as React from "react";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";
import { input } from "./AppType";
import { List } from "immutable";

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["+"];

let App = () => {
    const [showResult, setShowResult]: [string, any] = React.useState("");
    const [expression, setExpression]: [List<input>, any] = React.useState(List());

    // TODO Function to be developed
    // let _resultFunc = () => {
    // }

    function _resultClear() {
        setShowResult((_result) => "");
    }

    return <section>
        {/* TODO change to <NumberButton numbers setShowResult setExpression expression(all) /> Error syntax*/}
        <NumberButton numbers={numbers} setShowResult={setShowResult} setExpression={setExpression} expression={expression} />

        <OperatorButton operators={operators} setShowResult={setShowResult} setExpression={setExpression} expression={expression} />

        {/* <button value="=" style={{ color: 'red' }} onClick={() => _resultFunc()}>=</button> */}
        <button value="clear" style={{ color: 'red' }} onClick={() => _resultClear()}>clear</button>

        <span style={{ display: 'block' }}>{showResult}</span>
    </section>
}

export default App;