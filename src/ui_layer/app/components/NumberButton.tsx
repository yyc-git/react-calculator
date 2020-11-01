import * as React from "react";
import { requireCheck, test } from "../../../utils/contract";

function NumberButton({numbers, result, setResult, setCompute, compute}) {
  
  function update(value) {
    // TODO add contract
    // requireCheck(() =>{
    //   test("result should be empty or only contain number or contain number and +", () =>{
    //     return result === "" || /\d+/.test(result) || result.includes('+');
    //   });
    // });
    let i = compute;
    i.push(value);
    setCompute(() => i);
    
    setResult(eval(compute.join('')));
    
   
  }

  return (
    <section>
      {numbers.map((number) =>
        <button key={number.toString()} value={number} onClick={(_e) => update(number)}>{number}</button>
      )}
    </section>
  );
}

export default NumberButton;

