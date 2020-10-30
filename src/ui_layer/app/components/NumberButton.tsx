import * as React from "react";

function Buttons(props) {
  const setCalculator = props.setCalculator;
  const calculator = props.calculator;
  function update(e){
    setCalculator(calculator + props.value);
      
  }
  return <button value={props.value} onClick={update}>{props.value}</button>
}

function NumbersList(props) {
  const numbers = props.numbers;
  const setCalculator = props.setCalculator;
  const calculator = props.calculator;



  // function 
  return (
    <div>
      {numbers.map((number) =>
        <Buttons key={number.toString()}
                value={number} setCalculator={setCalculator} calculator={calculator}/>
      )}
      
   
      </div>
  );
}

export default NumbersList;

