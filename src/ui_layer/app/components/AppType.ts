export interface number_ {
    value: number,
    exec: (sum: sum, input: number_) => numberSum
};

type operatorValue = "+";

export interface operator {
    value: operatorValue,
    exec: (sum: sum, input: operator) => operatorSum
};

export type input =
    | number_
    | operator;
// export type input = number_ & operator;

// type numberSum = number;
export type numberSum = {
    type: "numberSum",
    value: number
}

// type operatorSum = [number_, operator];
type operatorSum = {
    type: "operatorSum",
    value: [number, operatorValue]
}

export type sum =
    | numberSum
    | operatorSum;


let _getValueFromNumber_ = (number_: number_) => {
    return number_.value;
}

let _getValueFromOperate = (operator: operator) => {
    return operator.value;
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

                    return {
                        type: "numberSum",
                        value: previousNumber + _getValueFromNumber_(currentValue)
                    }
            }
        }
    }
}

export let buildOperator = (value: operatorValue): operator => {
    return {
        value,
        exec: (previousSum: sum, currentValue: operator): operatorSum => {
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
    return numberSum.value;
};
