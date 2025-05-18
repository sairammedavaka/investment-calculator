import TableRowData from "./TableRowData.jsx";
import { calculateInvestmentResults } from "../util/investment";

function Table({ userData }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    userData;

  const annualData = calculateInvestmentResults({ ...userData });

  let updatedInvestmentResults = [];

  if (
    initialInvestment &&
    annualInvestment &&
    expectedReturn &&
    duration &&
    annualData.length > 0
  ) {
    updatedInvestmentResults = annualData.map((data, index) => {
      let totalInterest = 0;

      for (let i = 0; i <= index; i++) {
        totalInterest += annualData[i].interest;
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
          <TableRowData key={data.year} rowData={data} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
