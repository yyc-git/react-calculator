import * as React from "react";
import NumberButton from "./NumberButton"
import { input } from "./AppType";

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let App = () => {
    //TODO rename result to showResult
    // const [result, setResult] = React.useState("");
    const [result, setResult]: [string, any] = React.useState("");
    //TODO rename compute to computeResult
    // TODO use immutable->List instead of array (new type: list(input))
    const [compute, setCompute]: [input[], any] = React.useState(new Array());

    //TODO use arrow func(all)

    function update(e) {
        let i = compute;
        if (compute.slice(-1).join() != "+" && result != "") {
            setResult(result + e.target.value);
            i.push(e.target.value);
            setCompute((_compute) => i)
        }
    }

    function resultFunc() {
        let i = result;
        if (compute.slice(-1).join() != "+" && result != "") {
            i = eval(compute.join(''));
        };
        setResult((_result) => i);
    }

    function resultClear() {
        setResult((_result) => "");
    }

    return <section>
        <NumberButton numbers={numbers} setResult={setResult} result={result} setCompute={setCompute} compute={compute} />

        {/* TODO extract OperatorButton */}
        {/* TODO implement exec in + */}
        <button value="+" style={{ color: 'red' }} onClick={(e) => update(e)}>+</button>


        <button value="=" style={{ color: 'red' }} onClick={() => resultFunc()}>=</button>
        <button value="clear" style={{ color: 'red' }} onClick={() => resultClear()}>clear</button>

        <span style={{ display: 'block' }}>{result}</span>
    </section>
}

export default App;