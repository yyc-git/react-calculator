import * as React from "react";
import { requireCheck, test } from "../../../utils/contract";

function NumberButton({numbers, result, setResult}) {

  function update(value) {
    // TODO add contract
    // requireCheck(() =>{
    //   test("result should be empty or only contain number or contain number and +", () =>{
    //     return result === "" || /\d+/.test(result) || result.includes('+');
    //   });
    // });
    setResult(result + value);
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

