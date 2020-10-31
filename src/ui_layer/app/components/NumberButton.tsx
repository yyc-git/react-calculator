import * as React from "react";
import { requireCheck, test } from "../../../utils/contract";

function Buttons(props) {
  const setCalculator = props.setCalculator;
  const calculator = props.calculator;

  // TODO change to pure func(all):
  // function update(result, value)
  function update(e) {
    // TODO add contract
    // requireCheck(() =>{
    //   test("result should be empty or only contain number or contain number and +", () =>{
    //     return result === "" || /\d+/.test(result) || result.includes('+');
    //   });
    // });

    setCalculator(calculator + props.value);
  }
  return <button value={props.value} onClick={update}>{props.value}</button>
  // TODO change to return <button value={props.value} onClick={(_) => update(result, value)}>{props.value}</button>
}

// TODO use {numbers}
// TODO rename to NumberButton
function NumbersList(props) {
  const numbers = props.numbers;
  const setCalculator = props.setCalculator;
  const calculator = props.calculator;

  return (
    <div>
      {numbers.map((number) =>
        // TODO move Buttons logic here
        <Buttons key={number.toString()}
          value={number} setCalculator={setCalculator} calculator={calculator} />
      )}


    </div>
  );
}

export default NumbersList;

