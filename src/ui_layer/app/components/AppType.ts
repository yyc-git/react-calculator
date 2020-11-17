import { List } from "immutable";
import { flow } from "lodash";

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


// export type input =
//   number_
//   & operator;

type numberSumValue = number;

export type numberSum = {
  type: "numberSum",
  value: numberSumValue
}

// type operatorSumValue = [number, operatorValue];
type operatorSumValue = [number, operatorValue, number];


export type operatorSum = {
  type: "operatorSum",
  value: operatorSumValue
}


// type threeSumValue = [number, operatorValue, number];


// export type threeSum = {
//   type: "threeSum",
//   value: threeSumValue
// }

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

export let convertNumberSumValueToShowResult = (value: numberSumValue): string => {
  return String(value);
}

export let convertOperatorSumValueToShowResult = ([left, operator, right]: operatorSumValue): string => {
  return String(left) + operator + String(right);
}

// TODO refactor right value and input are duplicate

let _handleNumberInput = (sum, numberInput, nextInput): sum => {
  let _handleOperatorSum = (operatorSum, numberInput, nextInput): sum => {
    let _handleNumberNextInput = (operatorSum, numberInput, numberNextInput): sum => {
      let [leftVal, operatorAdd, rightVal] = operatorSum.value

      // if(numberNextInput === -1){
      //   return {
      //     type: "numberSum",
      //     value: leftVal + rightVal
      //   }
      // }

      // if (numberInput === rightVal) {
      return {
        type: "operatorSum",
        // value: [leftVal, operatorAdd, _getValueFromNumber_(numberInput) * 10 + numberNextInput.value]
        value: [leftVal, operatorAdd, rightVal * 10 + numberNextInput.value]
        // value: [leftVal, operatorAdd, rightVal]
      }
      // }
      // else {
      //   return {
      //     type: "operatorSum",
      //     // value: [leftVal, operatorAdd, _getValueFromNumber_(numberInput) * 10 + numberNextInput.value]
      //     value: [leftVal, operatorAdd, rightVal]
      //   }
      // }
    }

    let _handleOperatorNextInput = (operatorSum, numberInput, operatorNextInput): operatorSum => {
      let [leftValue, operatorAdd, rightValue] = operatorSum.value
      return {
        // type: "numberSum",
        // value: leftValue + _getValueFromNumber_(numberInput)

        type: "operatorSum",
        value: [leftValue, operatorAdd, rightValue]
      }
    }

    switch (nextInput.type) {
      case "number_":
        return _handleNumberNextInput(operatorSum, numberInput, nextInput);
      case "operator":
        return _handleOperatorNextInput(operatorSum, numberInput, nextInput);
    }
  }

  switch (sum.type) {
    case "numberSum":
      return {
        type: "numberSum",
        value: sum.value * 10 + _getValueFromNumber_(numberInput)
      }
    case "operatorSum":
      return _handleOperatorSum(sum, numberInput, nextInput);
  }
}

let _handleOperatorInput = (sum, operatorInput, nextInput): sum => {
  let _handleNumberSum = (numberSum, operatorInput, nextInput): sum => {
    return {
      type: "operatorSum",
      value: [numberSum.value, _getValueFromOperate(operatorInput), nextInput.value]
    }
  }

  switch (sum.type) {
    case "operatorSum":
      // return {
      //   type: "operatorSum",
      //   value: sum.value
      // }
      let [leftValue, operatorAdd, rightValue] = sum.value

      // return {
      //   type: "numberSum",
      //   value: leftValue + rightValue
      // }

      return {
        type: "operatorSum",
        value: [leftValue + rightValue, operatorAdd, nextInput.value]
      }
    case "numberSum":
      return _handleNumberSum(sum, operatorInput, nextInput);
  }
}

let _isHandleLastItem = (currentIndex, sourceList) => {
  // let _hasNextItem = (currentIndex, sourceList) => {
  return currentIndex === sourceList.size - 1;
  // return sourceList.get(currentIndex + 1) !== undefined;
};

export let compute = (sum: sum, input: input, currentIndex: number, sourceList: List<input>): sum => {
  // if (sourceList.size !== 2 && currentIndex === sourceList.size - 1) {
  //   return sum;
  // }

  console.log(sum, input, currentIndex, sourceList);

  // let nextInput = null;
  // if (currentIndex === sourceList.size - 1) {
  //   // nextInput = buildNumber_(0);
  //   // nextInput = buildNumber_(-1);
  // }
  // else {
  //   nextInput = sourceList.get(currentIndex + 1);
  // }

  // switch (input.type) {
  //   case "number_":
  //     return _handleNumberInput(sum, input, nextInput);
  //   case "operator":
  //     return _handleOperatorInput(sum, input, nextInput);
  // }

  if (_isHandleLastItem(currentIndex, sourceList)) {
    switch (input.type) {
      case "number_":
        switch (sum.type) {
          case "operatorSum":
            let [leftValue, operatorAdd, rightValue] = sum.value;

            return {
              type: "operatorSum",
              value: [leftValue, operatorAdd, rightValue]
            }


          // return {
          //   type: "numberSum",
          //   // value: sum.value * 10 + _getValueFromNumber_(input)
          //   value: leftValue + rightValue
          // };

          case "numberSum":
            return {
              type: "numberSum",
              value: sum.value * 10 + _getValueFromNumber_(input)
            };
        }
      case "operator":
        switch (sum.type) {
          case "operatorSum":
            let [leftValue, _operatorAdd, rightValue] = sum.value;

            return {
              type: "numberSum",
              value: leftValue + rightValue
            };
          case "numberSum":
            return {
              type: "numberSum",
              value: sum.value
            };
        }
    }
  }
  else {
    let nextInput = sourceList.get(currentIndex + 1);

    switch (input.type) {
      case "number_":
        return _handleNumberInput(sum, input, nextInput);
      case "operator":
        return _handleOperatorInput(sum, input, nextInput);
    }
  }
}


export let getShowResult = (sum: sum) => {
  switch (sum.type) {
    case "numberSum":
      return flow(
        [
          getValueFromNumberSum, convertNumberSumValueToShowResult
        ]
      )(sum);
    case "operatorSum":
      return flow(
        [
          getValueFromOperatorSum, convertOperatorSumValueToShowResult
        ]
      )(sum);
  }
}