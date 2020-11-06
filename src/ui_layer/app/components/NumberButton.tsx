import * as React from "react";
import { List } from "immutable";
import { input, number_, operator_, numberSum, sum, buildNumber_, getValueFromNumberSum } from "./AppType";
import { flow } from "lodash";

function NumberButton({ numbers, setShowResult, setComputeResult, computeResult }) {

  let _compute = (computeResult: List<input>): numberSum => {
    return computeResult.reduce((sum: sum, input: number_ & operator_) => {
      return (input as input).exec(sum, input);
    }, {
      type: "numberSum",  
      value: 0
    }) as numberSum;
  };

  let _update = (numberValue: string, setShowResult, setComputeResult, computeResult: List<input>) => {
    let number: number_ = buildNumber_(Number(numberValue));

    let newComputeResult = computeResult.slice().push(
      number
    );

    setComputeResult(
      newComputeResult
    );
    console.log(newComputeResult)
    setShowResult(
      flow([
        _compute, getValueFromNumberSum
      ])(newComputeResult)
    )
  }

  return (
    <section>
      {numbers.map((number) =>
        <button key={number.toString()} value={number} onClick={(_e) => _update(number, setShowResult, setComputeResult, computeResult)}>{number}</button>
      )}
    </section>
  );
}

export default NumberButton;

