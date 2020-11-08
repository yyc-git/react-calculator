import * as React from "react";
import { List } from "immutable";
import { input, number_, operator_, operatorValue, operatorSum, sum, buildOperator, getValueFromOperatorSum, _getValueFromOperate, compute, convertOperatorSumValueToShowResult } from "./AppType";
import { flow } from "lodash";

function CalculationButton({ calculations, setShowResult, setComputeResult, computeResult }) {
  let _compute = (computeResult: List<input>): operatorSum => {
    return computeResult.reduce((sum: sum, input: number_ & operator_) => {
      return compute(sum, input);
    }, {
      type: "numberSum",
      value: 0
    }) as operatorSum;
  };

  let _update = (operatorValue: operatorValue, setShowResult, setComputeResult, computeResult: List<input>) => {
    let operator: operator_ = buildOperator(operatorValue);

    let newComputeResult = computeResult.push(
      operator
    );
    setComputeResult(
      newComputeResult
    );
    console.log(newComputeResult, "Calculation newComputeResult")

    // TODO change to:
    //   flow([
    //     _compute, getValueFromOperatorSum, convertOperatorSumValueToShowResult, setShowResult
    //   ])(newComputeResult)
    setShowResult(
      flow([
        _compute, getValueFromOperatorSum, convertOperatorSumValueToShowResult
      ])(newComputeResult)
    )
  }

  return (
    <section>
      {calculations.map((calculation) =>
        // TODO remove .toString()
        <button key={calculation} value={calculation} onClick={(_e) => _update(calculation, setShowResult, setComputeResult, computeResult)}>{calculation}</button>
      )}
    </section>
  );
}

export default CalculationButton;

