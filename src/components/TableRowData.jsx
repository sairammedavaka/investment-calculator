import { formatter } from "../util/investment.js";

function TableRowData({ rowData }) {
  const { year, investmentValue, interest, totalInterest, investedCapital } =
    rowData;

  return (
    <tr>
      <td>{year}</td>
      <td>{formatter.format(investmentValue)}</td>
      <td>{formatter.format(interest)}</td>
      <td>{formatter.format(totalInterest)}</td>
      <td>{formatter.format(investedCapital)}</td>
    </tr>
  );
}

export default TableRowData;
