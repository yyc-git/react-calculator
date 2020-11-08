import * as React from "react";
import { List } from "immutable";
import { input, number_, operator_, numberSum, sum, buildNumber_, getValueFromNumberSum, compute, convertNumberSumValueToShowResult } from "./AppType";
import { flow } from "lodash";

// TODO change to arrow(all)
let NumberButton = ({ numbers, setShowResult, setComputeResult, computeResult }) => {
  let _compute = (computeResult: List<input>): numberSum => {
    return computeResult.reduce((sum: sum, input: number_ & operator_) => {
      return compute(sum, input);
    }, {
      type: "numberSum",
      value: 0
    }) as numberSum;
  };

  let _update = (numberValue: string, setShowResult, setComputeResult, computeResult: List<input>) => {
    let number: number_ = buildNumber_(Number(numberValue));

    let newComputeResult = computeResult.push(
      number
    );

    setComputeResult(
      newComputeResult
    );
    console.log(newComputeResult)

    // TODO change to:
      flow([
        _compute, getValueFromNumberSum, convertNumberSumValueToShowResult, setShowResult
      ])(newComputeResult)
    // setShowResult(
    //   flow([
    //     _compute, getValueFromNumberSum, convertNumberSumValueToShowResult
    //   ])(newComputeResult)
    // )
  }

  return (
    <section>
      {numbers.map((number) =>
        <button key={number} value={number} onClick={(_e) => _update(number, setShowResult, setComputeResult, computeResult)}>{number}</button>
      )}
    </section>
  );
}

export default NumberButton;

