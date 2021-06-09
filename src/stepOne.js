import React, { useState } from "react";
import { Link } from 'react-router-dom'

const StepOne = (props) => {
  const { handleInputChange, formState } = props;

  return (
    <div>
      <p style={{fontSize: '16px', fontWeight: 'bold', color: 'mediumpurple', fontFamily: 'Verdana'}}>Tell us some more about who you would like to schedule this occassion for</p>
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
        <div className="six columns">
          <label>Preference(s)</label>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
                Gift Cards & Coupons <input value="yes" name="giftcards" onChange={handleInputChange} type="checkbox" />
              </span>
              <span>
                Electronics <input value="yes" name="electronics" onChange={handleInputChange} type="checkbox" />
              </span>
              <span>
                Jewellery <input value="yes" name="jewellery" onChange={handleInputChange} type="checkbox" />
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
                Personalized gifts <input value="yes" name="personalized" onChange={handleInputChange} type="checkbox" />
              </span>
              <span>
                Flowers <input value="yes" name="flowers" onChange={handleInputChange} type="checkbox" />
              </span>
              <span>
                Chocolate <input value="yes" name="chocolate" onChange={handleInputChange} type="checkbox" />
              </span>
            </div>
            <p>
              I don't know <input value="true" name="unknown" onChange={handleInputChange} type="checkbox" />
            </p>
          </div>
          <Link to='/'><button>Home</button></Link>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
