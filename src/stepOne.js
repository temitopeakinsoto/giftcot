import React, { useState } from "react";

const StepOne = (props) => {
  const { handleInputChange, formState } = props;

  return (
    <div>
      <p>Set some input information for the reminder..</p>
      <div className="row">
        <div className="six columns">
          <label>Recipient's Name</label>
          <input
            className="u-full-width"
            placeholder="Name"
            type="text"
            name="firstName"
            onChange={handleInputChange}
            value={formState.firstName}
            autoFocus
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>Occassion</label>
          <select
            class="form-control"
            name="occassion"
            onChange={handleInputChange}
            value={formState.occassion}
          >
            <option name="relation">Select Occassion</option>
            <option value="birthday">Birthday</option>
            <option value="graduation">Graduation</option>
            <option value="anneversary">Anniversary</option>
            <option value="holidays">Holidays</option>
            <option value="others">Others</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>Relation</label>
          <select
            class="form-control"
            name="relation"
            onChange={handleInputChange}
            value={formState.relation}
          >
            <option>Select Relation</option>
            <option value="friend">Friend</option>
            <option value="family">Family</option>
            <option value="colleague">Colleage</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>Budget (In $)</label>
          <input
            className="u-full-width"
            placeholder="Budget"
            name="budget"
            type="text"
            onChange={handleInputChange}
            value={formState.budget}
          />
        </div>
      </div>
      <div className="row">
        {/* <div>
          {formState.preferences &&
            formState.preferences.map((item) => (
              <span
                style={{
                  padding: "3px",
                  marginLeft: "3px",
                  color: "gray",
                  fontWeight: "bold",
                }}
              >
                {item} x
              </span>
            ))}
        </div> */}
        <div className="six columns">
          <label>Preference(s)</label>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
                Gift cards & Coupons <input type="checkbox" />
              </span>
              <span>
                Electronics <input type="checkbox" />
              </span>
              <span>
                Jewellery <input type="checkbox" />
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
                Personalized gifts <input type="checkbox" />
              </span>
              <span>
                Flowers <input type="checkbox" />
              </span>
              <span>
                Choloclate <input type="checkbox" />
              </span>
            </div>
            <p>
              I don't know <input type="checkbox" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
