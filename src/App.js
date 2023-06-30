import "./styles.css";
import Step from "./Step";
import Count from "./Count";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  // const [datedsp, setDatedsp] = useState(new Date());

  let dt = new Date("June 21 2023");

  dt.setDate(dt.getDate() + count);

  const stepPlusHandler = () => {
    setStep((s) => s + 1);
  };

  const stepMinusHandler = () => {
    setStep((s) => s - 1);
  };

  const countPlusHandler = () => {
    setCount((c) => c + step);
  };

  const countMinusHandler = () => {
    setCount((c) => c - step);
  };

  return (
    <div className="App">
      <Step plus={stepPlusHandler} minus={stepMinusHandler} step={step} />
      <Count plus={countPlusHandler} minus={countMinusHandler} count={count} />

      <h2>
        {count === 0 && `Today is ${dt.toLocaleDateString()}`}
        {count > 0 && `${count} days from today is ${dt.toLocaleDateString()}`}
        {count < 0 &&
          `${Math.abs(count)} days ago today was ${dt.toLocaleDateString()}`}
      </h2>
    </div>
  );
}
