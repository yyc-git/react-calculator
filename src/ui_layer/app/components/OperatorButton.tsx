import * as React from "react";
import { List } from "immutable";
import { input, number_, operator, operatorValue, operatorSum, sum, buildOperator, _getValueFromOperate, compute, getShowResult } from "./AppType";
import { flow, curry } from "lodash";
import { printValue } from "../../../utils/log";

let OperatorButton = ({ operators, setShowResult, setExpression, expression }) => {
  let _compute = (expression: List<input>): operatorSum => {
    return expression.reduce((sum: sum, input: number_ & operator, currentIndex, sourceList) => {
      return compute(sum, input, currentIndex, sourceList);
    }, {
      type: "numberSum",
      value: 0
    }) as operatorSum;
  };

  let _update = (operatorValue: operatorValue, setShowResult, setExpression, expression: List<input>) => {
    let operator: operator = buildOperator(operatorValue);

    let newComputeResult = null;


    // console.log(expression.get(expression.size - 1), operator, expression.get(expression.size - 1) != operator);



    if (expression.get(expression.size - 1).value != operator.value) {
      newComputeResult = expression.push(
        operator
      );
    }
    else {
      newComputeResult = expression;
    }

    setExpression(
      newComputeResult
    );

    flow([
      _compute, getShowResult, curry(printValue)("operator:"), setShowResult
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

