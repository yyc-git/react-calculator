type numberValue = number;

export interface number_ {
    type: "number_",
    value: numberValue,
    // exec: (sum: sum, input: number_) => numberSum
};

export type operatorValue = "+";

export interface operator {
    type: "operator",
    value: operatorValue,
    // exec: (sum: sum, input: operator) => operatorSum
};

export type input =
    | number_
    | operator;

type numberSumValue = number;

export type numberSum = {
    type: "numberSum",
    value: numberSumValue
}

type operatorSumValue = [number, operatorValue];

// type operatorSum = [number_, operator];
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
    console.log(operator, 'appType _getValueFromOperate')
    return operator.value;
}

export let buildNumber_ = (value: number): number_ => {
    return {
        type: "number_",
        value,
    }
}

// type input = 
// | Number(number)
// | buildOperator((number, string));

export let buildOperator = (value: operatorValue): operator => {
    return {
        type: "operator",
        value,
    }
}

export let getValueFromNumberSum = (numberSum: numberSum): number => {
    console.log(numberSum, 'apptype——getValueFromNumberSum')
    return numberSum.value;
};

export let getValueFromOperatorSum = (operatorSum: operatorSum) => {
    return operatorSum.value;
}

// TODO implement

export let convertNumberSumValueToShowResult = (value: numberSumValue) => {
    return value
}


export let convertOperatorSumValueToShowResult = (value: operatorSumValue) => {
    if (value.slice(0, 1).toString() === "0") {
        return value.slice(2)
    }
    return value
}

// TODO fix: handle "0 + 1 2"

export let compute = (sum: sum, input: input) => {
    switch (input.type) {
        case "number_":
            switch (sum.type) {
                case "numberSum":
                    return {
                        type: "numberSum",
                        value: sum.value * 10 + _getValueFromNumber_(input)
                    }
                case "operatorSum":
                    let [previousNumber, _] = sum.value;

                    return {
                        type: "numberSum",
                        value: previousNumber + _getValueFromNumber_(input)
                    }
            }
            break
        case "operator":
            switch (sum.type) {
                case "numberSum":
                    return {
                        type: "operatorSum",
                        value: [sum.value, _getValueFromOperate(input)]
                    }
                case "operatorSum":
                    return {
                        type: "operatorSum",
                        value: sum.value
                    }
            }
            break
    }
}
