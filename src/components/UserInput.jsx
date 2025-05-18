import { LABEL_NAMES_CONSTANTS } from "../constants.js";

function UserInput({ userData, onChangeInput }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    userData;

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor={LABEL_NAMES_CONSTANTS.initialInvestment}>
            initial investment
          </label>
          <input
            id={LABEL_NAMES_CONSTANTS.initialInvestment}
            type="number"
            value={initialInvestment}
            onChange={(event) =>
              onChangeInput("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor={LABEL_NAMES_CONSTANTS.annualInvestment}>
            annual investment
          </label>
          <input
            id={LABEL_NAMES_CONSTANTS.annualInvestment}
            type="number"
            value={annualInvestment}
            onChange={(event) =>
              onChangeInput("annualInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor={LABEL_NAMES_CONSTANTS.expectedReturn}>
            expected return
          </label>
          <input
            id={LABEL_NAMES_CONSTANTS.expectedReturn}
            type="number"
            value={expectedReturn}
            onChange={(event) =>
              onChangeInput("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor={LABEL_NAMES_CONSTANTS.duration}>duration</label>
          <input
            id={LABEL_NAMES_CONSTANTS.duration}
            type="number"
            value={duration}
            onChange={(event) => onChangeInput("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
