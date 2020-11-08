type numberValue = number;

export interface number_ {
    type: "number_",
    value: numberValue,
    // exec: (sum: sum, input: number_) => numberSum
};

export type operatorValue = "+";

// TODO rename operator_ to operator
export interface operator_ {
    type: "operator",
    value: operatorValue,
    // exec: (sum: sum, input: operator_) => operatorSum
};

export type input =
    | number_
    | operator_;

type numberSumValue = number;

export type numberSum = {
    type: "numberSum",
    value: numberSumValue
}

type operatorSumValue = [number, operatorValue];

// type operatorSum = [number_, operator_];
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

export let _getValueFromOperate = (operator_: operator_) => {
    console.log(operator_, 'appType _getValueFromOperate')
    return operator_.value;
}

export let buildNumber_ = (value: number): number_ => {
    return {
        type: "number_",
        value,
        // exec: (previousSum: sum, currentValue: number_): numberSum => {
        //     switch (previousSum.type) {
        //         case "numberSum":
        //             return {
        //                 type: "numberSum",
        //                 value: previousSum.value * 10 + _getValueFromNumber_(currentValue)
        //             }
        //         case "operatorSum":
        //             let [previousNumber, _] = previousSum.value;
        //             console.log(previousSum.value)
        //             return {
        //                 type: "numberSum",
        //                 value: previousNumber + _getValueFromNumber_(currentValue)
        //             }
        //     }
        // }
    }
}

// type input = 
// | Number(number)
// | buildOperator((number, string));

export let buildOperator = (value: operatorValue): operator_ => {
    return {
        type: "operator",
        value,
        // exec: (previousSum: sum, currentValue: operator_): operatorSum => {
        //     switch (previousSum.type) {
        //         case "numberSum":
        //             return {
        //                 type: "operatorSum",
        //                 value: [previousSum.value, _getValueFromOperate(currentValue)]
        //             }
        //         case "operatorSum":
        //             return {
        //                 type: "operatorSum",
        //                 value: previousSum.value
        //             }
        //     }
        // }
    }
}

export let getValueFromNumberSum = (numberSum: numberSum): number => {
    console.log(numberSum, 'apptype——getValueFromNumberSum')
    return numberSum.value;
};

// TODO change to operatorSum
export let getValueFromOperatorSum = (operator_: operator_) => {
    if (operator_.value.slice(0, 1).toString() === "0") {
        return operator_.value.slice(2)
    }
    console.log(operator_, "appType getValueFromOperatorSum")
    return operator_.value;
}

// TODO implement

export let convertNumberSumValueToShowResult = (value:numberSumValue) =>{

}


export let convertOperatorSumValueToShowResult = (value:operatorSumValue) =>{

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
