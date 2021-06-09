import React, { useState } from "react";

const StepFour = (props) => {
  const { submit, handleInputChange } = props;
  console.log("level four is", submit);
  const [checked, setChecked] = useState(false);
  const [no, setNo] = useState(false)

  return (
    <div className="row">
      <p>
        I would love to pay for a service that reminds and recommend occassions
        and gifts to me for an entire year
      </p>
      <div style={{ display: "flex", marginBottom: "1rem" }}>
        <span style={{ marginRight: "1rem" }}>
          Yes <span style={{ color: "red" }}>($10 / Yr)</span>
          <input
            type="radio"
            onChange={(e) => setChecked(e.target.value)}
            name="pay10"
            onChange={handleInputChange}
            // onChange={(e) => setNo(false)}
            style={{ marginLeft: "1rem" }}
          />
        </span>
        <span style={{ marginRight: "1rem" }}>
          Yes <span style={{ color: "red" }}>($6 / Yr)</span>
          <input
            type="radio"
            
            name="pay6"
            onChange={handleInputChange}
            // onChange={(e) => setNo(false)}
            style={{ marginLeft: "1rem" }}
          />
        </span>
        <span style={{ marginRight: "1rem" }}>
          No
          <input
            type="radio"
            // onChange={(e) => {setChecked(e.target.value)}}
            name="nopay"
            onChange={() => setNo(true)}
            style={{ marginLeft: "1rem" }}
          />
        </span>
        <p>{
          no && <input
          type="text"
          // onChange={(e) => setChecked(e.target.value)}
          name="set"
          onChange={handleInputChange}
          style={{ marginLeft: "1rem" }}
        />
        }</p>
        
      </div>
      <button
        style={{ position: "absolute", left: "0", bottom: "-50px" }}
        onClick={submit}
      >
        Submit
      </button>
    </div>
  );
};

export default StepFour;
