import React, { useState } from "react";
import { Link } from "react-router-dom";

const StepFour = (props) => {
  const { submit, handleInputChange } = props;
  // const [checked, setChecked] = useState(false);
  const [no, setNo] = useState(false);

  return (
    <div className="row">
      <p>
        I would love to pay for a service that reminds and recommend occassions
        and gifts to me for an entire year
      </p>
      <form style={{ display: "flex", marginBottom: "1rem" }}>
        <span style={{ marginRight: "1rem" }}>
          Yes <span style={{ color: "red" }}>($10 / Yr)</span>
          <input
            type="radio"
            // onChange={(e) => setChecked(e.target.value)}
            name="willing_to_pay"
            value="10 dollars"
            onChange={handleInputChange}
            onChange={(e) => setNo(false)}
            style={{ marginLeft: "1rem" }}
          />
        </span>
        <span style={{ marginRight: "1rem" }}>
          Yes <span style={{ color: "red" }}>($6 / Yr)</span>
          <input
            type="radio"
            name="willing_to_pay"
            value="6 dollars"
            onChange={handleInputChange}
            onChange={(e) => setNo(false)}
            style={{ marginLeft: "1rem" }}
          />
        </span>
        <span style={{ marginRight: "1rem" }}>
          No
          <input
            type="radio"
            // onChange={(e) => {setChecked(e.target.value)}}
            name="willing_to_pay"
            value="no"
            onChange={handleInputChange}
            onChange={(e) => setNo(true)}

            style={{ marginLeft: "1rem" }}
          />
        </span>
        <p>
          {no && (
            <input
              type="text"
              // onChange={(e) => setChecked(e.target.value)}
              name="set"
              onChange={handleInputChange}
              style={{ marginLeft: "1rem" }}
              placeholder="Please tell us why"
            />
          )}
        </p>
      </form>
      <Link to="/">
        <button
          style={{ position: "absolute", left: "0", bottom: "-50px" }}
          onClick={submit}
        >
          Submit
        </button>
      </Link>
    </div>
  );
};

export default StepFour;
