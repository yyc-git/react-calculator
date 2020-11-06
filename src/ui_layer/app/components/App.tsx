import * as React from "react";
import NumberButton from "./NumberButton";
import CalculationButton from "./CalculationButton";
import { input } from "./AppType";
import { List } from "immutable";

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const calculation = ["+"];

let App = () => {
    const [showResult, setShowResult]: [string, any] = React.useState("");
    const [computeResult, setComputeResult]: [List<input>, any] = React.useState(List());

    // TODO Function to be developed
    // let _resultFunc = () => {
    // }

    function _resultClear() {
        setShowResult((_result) => "");
    }

    return <section>
        <NumberButton numbers={numbers} setShowResult={setShowResult} setComputeResult={setComputeResult} computeResult={computeResult} />

        <CalculationButton calculations={calculation} setShowResult={setShowResult} setComputeResult={setComputeResult} computeResult={computeResult} />

        {/* <button value="=" style={{ color: 'red' }} onClick={() => _resultFunc()}>=</button> */}
        <button value="clear" style={{ color: 'red' }} onClick={() => _resultClear()}>clear</button>

        <span style={{ display: 'block' }}>{showResult}</span>
    </section>
}

export default App;