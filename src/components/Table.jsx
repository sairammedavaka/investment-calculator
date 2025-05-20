import { calculateInvestmentResults, formatter } from "../util/investment";

function Table({ userData }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    userData;

  let investmentResults = [];

  if (
    initialInvestment > 0 &&
    annualInvestment > 0 &&
    expectedReturn > 0 &&
    duration > 0
  ) {
    investmentResults = calculateInvestmentResults({ ...userData });
  } else {
    return <p className="center">Invalid input data.</p>;
  }

  let updatedInvestmentResults = [];

  if (investmentResults.length > 0) {
    updatedInvestmentResults = investmentResults.map((data, index) => {
      let totalInterest = 0;

      for (let i = 0; i <= index; i++) {
        totalInterest += investmentResults[i].interest;
      }

      return {
        year: data.year,
        investmentValue: Math.ceil(data.valueEndOfYear),
        interest: Math.ceil(data.interest),
        totalInterest: Math.ceil(totalInterest),
        investedCapital:
          Math.ceil(data.valueEndOfYear) - Math.ceil(totalInterest),
      };
    });
  }

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Captial</th>
        </tr>
      </thead>
      <tbody>
        {updatedInvestmentResults.map((data) => (
          <tr>
            <td>{data.year}</td>
            <td>{formatter.format(data.investmentValue)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>{formatter.format(data.totalInterest)}</td>
            <td>{formatter.format(data.investedCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
