import * as React from "react";
import { List } from "immutable";
import { input, number_, operator, operatorValue, operatorSum, sum, buildOperator, getValueFromOperatorSum, _getValueFromOperate, compute, convertOperatorSumValueToShowResult } from "./AppType";
import { flow } from "lodash";

let OperatorButton = ({ operators, setShowResult, setExpression, expression }) => {
  let _compute = (expression: List<input>): operatorSum => {
    return expression.reduce((sum: sum, input: number_ & operator) => {
      return compute(sum, input);
    }, {
      type: "numberSum",
      value: 0
    }) as operatorSum;
  };

  let _update = (operatorValue: operatorValue, setShowResult, setExpression, expression: List<input>) => {
    let operator: operator = buildOperator(operatorValue);

    let newComputeResult = expression.push(
      operator
    );
    setExpression(
      newComputeResult
    );

    flow([
      _compute, getValueFromOperatorSum, convertOperatorSumValueToShowResult, setShowResult
    ])(newComputeResult)
  }

  return (
    <section>
      {operators.map((operator) =>
        <button key={operator} value={operator} onClick={(_e) => _update(operator, setShowResult, setExpression, expression)}>{operator}</button>
      )}
    </section>
  );
}

export default OperatorButton;

