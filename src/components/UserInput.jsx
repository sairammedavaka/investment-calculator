import { LABEL_NAMES_CONSTANTS } from "../constants.js";
import InputContainer from "./InputContainer.jsx";

function UserInput({ userData, onChangeInput }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    userData;

  return (
    <section id="user-input">
      <div className="input-group">
        <InputContainer
          id={LABEL_NAMES_CONSTANTS.initialInvestment}
          label={"initial investment"}
          type="number"
          value={initialInvestment}
          onChange={(event) =>
            onChangeInput("initialInvestment", event.target.value)
          }
        />
        <InputContainer
          id={LABEL_NAMES_CONSTANTS.annualInvestment}
          label={"annual investment"}
          type="number"
          value={annualInvestment}
          onChange={(event) =>
            onChangeInput("annualInvestment", event.target.value)
          }
        />
        <InputContainer
          id={LABEL_NAMES_CONSTANTS.expectedReturn}
          label={"expected return"}
          type="number"
          value={expectedReturn}
          onChange={(event) =>
            onChangeInput("expectedReturn", event.target.value)
          }
        />
        <InputContainer
          id={LABEL_NAMES_CONSTANTS.duration}
          label={"duration"}
          type="number"
          value={duration}
          onChange={(event) => onChangeInput("duration", event.target.value)}
        />
      </div>
    </section>
  );
}

export default UserInput;
