import * as React from "react";
import NumberList from "./NumberButton"

// TODO change to const
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// TODO remove
let calculations = ["+", "-", "*", "/"]




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
    const [calculator, setCalculator] = React.useState(" ");

  // TODO change to pure func(all):
  // function update(result, value)
    function update(e) {
        let i = calculator;

        if (calculator.substr(-1) != "+" && calculator.substr(-1) != " ") {
            setCalculator(calculator + e.target.value);
        }
    }

    function calculatorFuc() {
        let i = calculator;
        if (calculator.substr(-1) != "+" && calculator.substr(-1) != " ") {
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

    // TODO (semantic): use html5 section/article(all)

    return <div>
{/* TODO rename to NumberButton */}
        <NumberList numbers={numbers} setCalculator={setCalculator} calculator={calculator} />

{/* TODO remove key */}
{/* TODO extract Operator ui */}
        <button key="+" value="+" style={{ color: 'red' }} onClick={update}>+</button>
        <button key="=" value="=" style={{ color: 'red' }} onClick={calculatorFuc}>=</button>
        <button key="clear" value="clear" style={{ color: 'red' }} onClick={calculatorClear}>clear</button>

        {/* TODO (semantic): use span  */}

        <div>{calculator}</div>
    </div>
}

export default App;