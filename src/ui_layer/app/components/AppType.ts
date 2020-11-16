import { List } from "immutable";

type numberValue = number;

export interface number_ {
  type: "number_",
  value: numberValue,
};

export type operatorValue = "+";

export interface operator {
  type: "operator",
  value: operatorValue,
};

export type input =
  | number_
  | operator;

type numberSumValue = number;

export type numberSum = {
  type: "numberSum",
  value: numberSumValue
}

type operatorSumValue = [number, operatorValue, number];

export type operatorSum = {
  type: "operatorSum",
  value: operatorSumValue
}

export type sum =
  | numberSum
  | operatorSum;

let _getValueFromNumber_ = (number_: number_) => {
  return number_.value;
}

export let _getValueFromOperate = (operator: operator) => {
  return operator.value;
}

export let buildNumber_ = (value: number): number_ => {
  return {
    type: "number_",
    value,
  }
}

export let buildOperator = (value: operatorValue): operator => {
  return {
    type: "operator",
    value,
  }
}

export let getValueFromNumberSum = (numberSum: numberSum): number => {
  return numberSum.value;
};

export let getValueFromOperatorSum = (operatorSum: operatorSum) => {
  return operatorSum.value;
}

export let convertNumberSumValueToShowResult = (value: numberSumValue) => {
  return value
}

export let convertOperatorSumValueToShowResult = (value: operatorSumValue) => {
  return value
}

export let compute = (sum: sum, input: input, currentIndex: number, sourceList: List<input>) => {
  if (sourceList.get(currentIndex + 1)) {
    switch (input.type) {
      case "number_":
        switch (sum.type) {
          case "numberSum":
            return {
              type: "numberSum",
              value: sum.value * 10 + _getValueFromNumber_(input)
            }
          case "operatorSum":
            switch (sourceList.get(currentIndex + 1).type) {
              case "number_":
                let [leftVal, operatorAdd, rightVal] = sum.value
                return {
                  type: "operatorSum",
                  value: [leftVal, operatorAdd, rightVal * 10 + _getValueFromNumber_(input)]
                }
              case "operator":
                let [leftValue, _, rightValue] = sum.value
                return {
                  type: "numberSum",
                  value: leftValue + rightValue * 10 + _getValueFromNumber_(input)
                }
            }
        }
      case "operator":
        switch (sum.type) {
          case "operatorSum":
            return {
              type: "operatorSum",
              value: sum.value
            }
          case "numberSum":
            return {
              type: "operatorSum",
              value: [sum.value, _getValueFromOperate(input), 0]
            }
        }
    }
  } else {
    switch (input.type) {
      case "number_":
        switch (sum.type) {
          case "numberSum":
            return {
              type: "numberSum",
              value: sum.value * 10 + _getValueFromNumber_(input)
            }
          case "operatorSum":
            let [leftVal, operatorAdd, rightVal] = sum.value
            return {
              type: "operatorSum",
              value: [leftVal, operatorAdd, rightVal * 10 + _getValueFromNumber_(input)]
            }
        }
      case "operator":
        switch (sum.type) {
          case "numberSum":
            return {
              type: "operatorSum",
              value: [sum.value, _getValueFromOperate(input)]
            }
          case "operatorSum":
            let [leftValue, _, rightValue] = sum.value
            return {
              type: "operatorSum",
              value: [leftValue + rightValue * 10 + _getValueFromOperate(input)]
            }

        }
    }
  }
}