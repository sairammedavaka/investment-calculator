import { LABEL_NAMES_CONSTANTS } from "../constants.js";
import InputContainer from "./InputContainer.jsx";

function UserInput({ userData, onChangeInput }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    userData;

  return (
    <section id="user-input">
      <div className="input-group">
        <InputContainer
          id={LABEL_NAMES_CONSTANTS.INITIAL_INVESTMENT}
          label={"initial investment"}
          type="number"
          value={initialInvestment}
          onChange={(event) =>
            onChangeInput(
              LABEL_NAMES_CONSTANTS.INITIAL_INVESTMENT,
              event.target.value
            )
          }
        />
        <InputContainer
          id={LABEL_NAMES_CONSTANTS.ANNUAL_INVESTMENT}
          label={"annual investment"}
          type="number"
          value={annualInvestment}
          onChange={(event) =>
            onChangeInput(
              LABEL_NAMES_CONSTANTS.ANNUAL_INVESTMENT,
              event.target.value
            )
          }
        />
        <InputContainer
          id={LABEL_NAMES_CONSTANTS.EXPECTED_RETURN}
          label={"expected return"}
          type="number"
          value={expectedReturn}
          onChange={(event) =>
            onChangeInput(
              LABEL_NAMES_CONSTANTS.EXPECTED_RETURN,
              event.target.value
            )
          }
        />
        <InputContainer
          id={LABEL_NAMES_CONSTANTS.DURATION}
          label={"duration"}
          type="number"
          value={duration}
          onChange={(event) =>
            onChangeInput(LABEL_NAMES_CONSTANTS.DURATION, event.target.value)
          }
        />
      </div>
    </section>
  );
}

export default UserInput;
