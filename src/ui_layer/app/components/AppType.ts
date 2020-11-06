export interface number_ {
    value: number,
    exec: (sum: sum, input: number_) => numberSum
};

export type operatorValue = "+";

export interface operator_ {
    value: operatorValue,
    exec: (sum: sum, input: operator_) => operatorSum
};

export type input =
    | number_
    | operator_;

export type numberSum = {
    type: "numberSum",
    value: number 
}

// type operatorSum = [number_, operator_];
export type operatorSum = {
    type: "operatorSum",
    value: [number, operatorValue]
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
        value,
        exec: (previousSum: sum, currentValue: number_): numberSum => {
            switch (previousSum.type) {
                case "numberSum":
                    return {
                        type: "numberSum",
                        value: previousSum.value * 10 + _getValueFromNumber_(currentValue)
                    }
                case "operatorSum":
                    let [previousNumber, _] = previousSum.value;
                    console.log(previousSum.value)
                    return {
                        type: "numberSum",
                        value: previousNumber + _getValueFromNumber_(currentValue)
                    }
            }
        }
    }
}

export let buildOperator = (value: operatorValue): operator_ => {
    return {
        value,
        exec: (previousSum: sum, currentValue: operator_): operatorSum => {
            switch (previousSum.type) {
                case "numberSum":
                    return {
                        type: "operatorSum",
                        value: [previousSum.value, _getValueFromOperate(currentValue)]
                    }
                case "operatorSum":
                    return {
                        type: "operatorSum",
                        value: previousSum.value
                    }
            }
        }
    }
}
export let getValueFromNumberSum = (numberSum: numberSum): number => {
    console.log(numberSum, 'apptype——getValueFromNumberSum')
    return numberSum.value;
};

export let getValueFromOperatorSum = (operator_: operator_) => {
    if (operator_.value.slice(0,1).toString() === "0") {
        return operator_.value.slice(2)
    }
    console.log(operator_, "appType getValueFromOperatorSum")
    return operator_.value;
}

