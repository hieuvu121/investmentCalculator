import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { calculateInvestmentResults } from "./util/investment";
import { useState } from "react";

function App() {
  const[userInput,handleInputChange]=useState({
      initialInvestment:0,
      annualInvestment:0,
      expectedReturn:0,
      duration:0,
  })

  function changeInput(type,value){
    handleInputChange(prev=>({
      ...prev,
      [type]:+value
    }));
  }

  const results = calculateInvestmentResults(userInput);

  return(
    <>
      <section>
        <UserInput onChange={changeInput}></UserInput>
        <Result data={results} initialInvestment={userInput.initialInvestment}></Result>
      </section>
    </>
  )
}

export default App
