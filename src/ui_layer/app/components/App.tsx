import { values } from "lodash";
import * as React from "react";
import NumberButton from "./NumberButton"

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// TODO separate compute expression and show:
// =: result = "1 + 2"

// eval(result)

// 计算表达式 和 显示 一个：result

// let result

// let calcExpression = Array(Number(1));

// let calcExpression = Array(Number(1), Operator(+));

// let calcExpression = Array(Number(1), Operator(+), Number(2));

// // let calcExpression = Array(Number(3), Operator(*));
// let calcExpression = Array(Number(1), Operator(+), Number(2), Operator(*));

// let calcExpression = Array(Number(1), Operator(+), Number(2), Operator(*), Number(4));

// let showResult = "1 + 2";

// number:0-9

// operator:+

// let calcExpression = Array(Number(1), Operator(+), Number(2),Operator(+), Operator(log), Number(3))

// "1+ 2 + log(3)"
// "1+ 2 + log3"
// "3 + log(3)"

// =: 
// //计算 计算表达式
// let result = eval(calcExpression);

// calcExpression ->reduce(result, num) =>{
//     return result +num.execute();
// }

// type showResult = string;
// showResult = result -> string;

// show(showResult)

// let result = "1 + 2"

// =: 
// //从“显示”提取 计算表达式
// //计算 计算表达式
// let result = eval(result);

// show(result)

let App = () => {
    const [result, setResult] = React.useState("");
    const [compute, setCompute] = React.useState(new Array());

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
        setResult((_result) => i );
    }

    function resultClear() {
        setResult((_result) => "" );
    }

    return <section>
        <NumberButton numbers={numbers} setResult={setResult} result={result} setCompute={setCompute} compute={compute} />

        <button value="+" style={{ color: 'red' }} onClick={(e) => update(e)}>+</button>
        <button value="=" style={{ color: 'red' }} onClick={() => resultFunc()}>=</button>
        <button value="clear" style={{ color: 'red' }} onClick={() => resultClear()}>clear</button>

        <span style={{ display:'block'}}>{result}</span>
    </section>
}

export default App;