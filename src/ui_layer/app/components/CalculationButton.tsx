import * as React from "react";
import { List } from "immutable";
import { input, number_, operator_, operatorValue, operatorSum, sum, buildOperator, getValueFromOperatorSum, _getValueFromOperate } from "./AppType";
import { flow } from "lodash";

function CalculationButton({ calculations, setShowResult, setComputeResult, computeResult }) {

  let _compute = (computeResult: List<input>): operatorSum => {
    return computeResult.reduce((sum: sum, input: number_ & operator_) => {
      return (input as input).exec(sum, input);
    }, {
      type: "numberSum",  
      value: 0
    }) as operatorSum;
  };

  let _update = (operatorValue: operatorValue, setShowResult, setComputeResult, computeResult: List<input>) => {
    let operator: operator_ = buildOperator(operatorValue );

    let newComputeResult = computeResult.slice().push(
      operator
    );
    setComputeResult(
      newComputeResult
    );
    console.log(newComputeResult, "Calculation newComputeResult")
    setShowResult(
      flow([
        _compute, getValueFromOperatorSum
      ])(newComputeResult)
    )
  }

  return (
    <section>
      {calculations.map((calculation) =>
        <button key={calculation.toString()} value={calculation} onClick={(_e) => _update(calculation, setShowResult, setComputeResult, computeResult)}>{calculation}</button>
      )}
    </section>
  );
}

export default CalculationButton;

