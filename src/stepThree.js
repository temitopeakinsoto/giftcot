import React from "react";

const StepThree = (props) => {
  return (
    <>
      <p style={{fontSize: '16px', fontWeight: 'bold', color: 'mediumpurple', fontFamily: 'Verdana'}}>
        Here's a list of gifts suggestion for you.
      </p>
      <div
        style={{
          marginBottom: "2rem",
          minWidth: "70%",
          maxWidth: "80%",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <span>
          <img width="90px" height="90px" alt="" src="https://bit.ly/3wavxTN" />
        </span>
        <span>
          <img width="90px" height="90px" alt="" src="https://bit.ly/34ZylXW" />
        </span>
        <span>
          <img width="90px" height="90px" alt="" src="https://bit.ly/3cr0OtM" />
        </span>
        <span>
          <img width="90px" height="90px" alt="" src="https://bit.ly/2Sm6LkP" />
        </span>
        <span>
          <img width="90px" height="90px" alt="" src="https://bit.ly/3cstMcN" />
        </span>
        <span>
          <img width="90px" height="90px" alt="" src="https://bit.ly/3g5hTfd" />
        </span>
        <span>
          <img width="90px" height="90px" alt="" src="https://bit.ly/355pB2B" />
        </span>
        <span>
          <img width="90px" height="90px" alt="" src="https://bit.ly/3csqmHc" />
        </span>
        <span>
          <img width="90px" height="90px" alt="" src="https://bit.ly/3za2At4" />{" "}
        </span>
      </div>
    </>
  );
};

export default StepThree;
