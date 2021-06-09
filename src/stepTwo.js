import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import 'react-calendar/dist/Calendar.css';

import Calendar from 'react-calendar'
// import "react-datepicker/dist/react-datepicker.css";

const StepTwo = (props) => {
  const { handleInputChange, formState, setFormState } = props;
  const [value, onChange] = useState(new Date())
  return (
    <div style={{marginBottom: '2rem'}}>
      <p style={{color: 'darkred', fontSize: '18px'}}>Select the date for the occassion you would like to schedule</p>
      <Calendar
        value={value}
        onChange={onChange}
        // onChange={handleInputChange}
        name='date_entered'
      />
    </div>
  );
};

export default StepTwo;
