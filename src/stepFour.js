import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";


const StepFour = (props) => {
  const { submit, handleInputChange2, handleInputChange, formState } = props;
  const [no, setNo] = useState(false);

  return (
    <div className="row">
      <p style={{fontSize: '16px', fontWeight: 'bold', color: 'mediumpurple', fontFamily: 'Verdana'}}>
        I would love to pay for a service that reminds and recommend occassions
        and gifts to me for an entire year
      </p>
      <form style={{ display: "flex", marginBottom: "1rem" }}>
        <span style={{ marginRight: "1rem" }}>
          Yes <span style={{ color: "red" }}>($10 / Yr)</span>
          <input
            type="radio"
            name="willing_to_pay"
            value="10 dollars"
            onChange={(e) => {
              setNo(false);
              handleInputChange2("10 dollars")
            }}
            style={{ marginLeft: "1rem" }}
          />
        </span>
        <span style={{ marginRight: "1rem" }}>
          Yes <span style={{ color: "red" }}>($6 / Yr)</span>
          <input
            type="radio"
            name="willing_to_pay"
            value="6 dollars"
            onChange={(e) => {
              setNo(false);
              handleInputChange2("6 dollars")
            }}
            style={{ marginLeft: "1rem" }}
          />
        </span>
        <span style={{ marginRight: "1rem" }}>
          No
          <input
            type="radio"
            name="willing_to_pay"
            value="no"
            onChange={(e) => {
              setNo(true);
              handleInputChange2("no")
            }}
            style={{ marginLeft: "1rem" }}
          />
        </span>
        <p>
          {no && (
            <input
              type="text"
              name="reason_for_rejection"
              value={formState.reason_for_rejection}
              onChange={handleInputChange}
              style={{ marginLeft: "1rem" }}
              placeholder="Please tell us why"
            />
          )}
        </p>
      </form>
      <Link to="/thanks">
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
