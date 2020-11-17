import * as React from "react";
import { List } from "immutable";
import { input, number_, operator, numberSum, sum, buildNumber_, compute, getShowResult } from "./AppType";
import { flow, curry } from "lodash";
import { printValue } from "../../../utils/log";

let NumberButton = ({ numbers, setShowResult, setExpression, expression }) => {
  let _compute = (expression: List<input>): numberSum => {
    return expression.reduce((sum: sum, input: number_ & operator, currentIndex, sourceList) => {
      return compute(sum, input, currentIndex, sourceList);
    }, {
      type: "numberSum",
      value: 0
    }) as numberSum;
  };

  let _update = (numberValue: string, setShowResult, setExpression, expression: List<input>) => {
    let number: number_ = buildNumber_(Number(numberValue));

    let newComputeResult = expression.push(
      number
    );

    setExpression(
      newComputeResult
    );

    flow([
      _compute, getShowResult, curry(printValue)("number:"), setShowResult
    ])(newComputeResult)
  }

  return (
    <section>
      {numbers.map((number) =>
        <button key={number} value={number} onClick={(_e) => _update(number, setShowResult, setExpression, expression)}>{number}</button>
      )}
    </section>
  );
}

export default NumberButton;

