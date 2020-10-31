import * as React from "react";
import NumberButton from "./NumberButton"

// TODO change to const
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// TODO separate compute expression and show:
// =: result = "1 + 2"

// eval(result)


// 计算表达式 和 显示 一个：result



// let result


// "1"



// let calcExpression = Array(Number(1));




// +:

// "1+"

// "1"




// let calcExpression = Array(Number(1), Operator(+));





// 2:

// "1+2"

// "3"

// "2"


// let calcExpression = Array(Number(1), Operator(+), Number(2));


// *:

// "1+2*"

// // "2*"



// // let calcExpression = Array(Number(3), Operator(*));
// let calcExpression = Array(Number(1), Operator(+), Number(2), Operator(*));



// 4:

// "4"


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
    // TODO rename to result, setResult(all)
    // TODO useState("")
    const [result, setResult] = React.useState("");

  // TODO change to pure func(all):
  // function update(result, value)
    function update(e) {
        let i = result;

        if (result.substr(-1) != "+" && result.substr(-1) != "") {
            setResult(result + e.target.value);
        }
    }

    function resultFunc() {
        let i = result;
        if (result.substr(-1) != "+" && result.substr(-1) != "") {
            i = eval(result).toString();
        };
        setResult((result) => {
            return i
        });
    }

    function resultClear() {
        setResult((result) => {
            return ""
        });
    }

    return <section>
        <NumberButton numbers={numbers} setResult={setResult} result={result} />

{/* TODO extract Operator ui */}
        <button value="+" style={{ color: 'red' }} onClick={update}>+</button>
        <button value="=" style={{ color: 'red' }} onClick={resultFunc}>=</button>
        <button value="clear" style={{ color: 'red' }} onClick={resultClear}>clear</button>

        <span style={{ display:'block'}}>{result}</span>
    </section>
}

export default App;