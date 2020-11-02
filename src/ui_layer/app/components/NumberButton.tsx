import * as React from "react";
import { requireCheck, test } from "../../../utils/contract";

import { List } from "immutable";
import { input, number_, operator, numberSum, sum, buildNumber_, getValueFromNumberSum } from "./AppType";
import { flow } from "lodash";

function NumberButton({ numbers, result, setResult, setCompute, compute }) {


  let _compute = (computeResult: input[]): numberSum => {
    return computeResult.reduce((sum: sum, input: number_ & operator) => {
      return (input as input).exec(sum, input);
    }, {
      type: "numberSum",
      value: 0
    }) as numberSum;
  };


  // TODO rename private func to _update(all)
  function update(setResult, setCompute, numberValue: string, compute: input[]) {
    let number: number_ = buildNumber_(Number(numberValue));


    let newComputeResult = compute.slice().push(
      number
    );

    setCompute(
      newComputeResult
    );

    setResult(
      flow([
        _compute, getValueFromNumberSum
      ])(newComputeResult)
    )
  }

  return (
    <section>
      {numbers.map((number) =>
        <button key={number.toString()} value={number} onClick={(_e) => update(setResult, setCompute, number, compute)}>{number}</button>
      )}
    </section>
  );
}

export default NumberButton;

