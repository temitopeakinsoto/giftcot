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
