import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Table from "./components/Table.jsx";

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 5.5,
    duration: 5,
  });

  function handleInputChange(identifier, value) {
    setInputValues((prevState) => {
      return { ...prevState, [identifier]: value ? Number(value) : "" };
    });
  }

  if (!inputValues.duration) {
    alert("Duration must be greater than zero.");
  }

  return (
    <>
      <Header />
      <UserInput userData={inputValues} onChangeInput={handleInputChange} />
      <Table userData={inputValues} />
    </>
  );
}

export default App;
