import * as React from "react";
import NumberButton from "./NumberButton";
import CalculationButton from "./CalculationButton";
import { input } from "./AppType";
import { List } from "immutable";

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// TODO rename to operators
const calculation = ["+"];

let App = () => {
    const [showResult, setShowResult]: [string, any] = React.useState("");
    // TODO rename computeResult to expression
    const [computeResult, setComputeResult]: [List<input>, any] = React.useState(List());

    // TODO Function to be developed
    // let _resultFunc = () => {
    // }

    function _resultClear() {
        setShowResult((_result) => "");
    }

    return <section>
        {/* TODO change to <NumberButton numbers setShowResult setComputeResult computeResult(all) /> */}
        <NumberButton numbers={numbers} setShowResult={setShowResult} setComputeResult={setComputeResult} computeResult={computeResult} />

        {/* TODO rename to OperatorButton */}
        <CalculationButton calculations={calculation} setShowResult={setShowResult} setComputeResult={setComputeResult} computeResult={computeResult} />

        {/* <button value="=" style={{ color: 'red' }} onClick={() => _resultFunc()}>=</button> */}
        <button value="clear" style={{ color: 'red' }} onClick={() => _resultClear()}>clear</button>

        <span style={{ display: 'block' }}>{showResult}</span>
    </section>
}

export default App;