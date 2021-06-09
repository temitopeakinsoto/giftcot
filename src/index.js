import React, { useState } from "react";
import ReactDOM from "react-dom";
import firebase from "./utils/firebase";
import MultiStep from "react-multistep";
import "./css/custom.css";
import "./css/normalize.css";
import "./css/skeleton.css";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import StepFour from "./stepFour";
import Landing from "./Landing";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const initialformState = {
  firstName: "",
  relation: "",
  email: "",
  budget: "",
  occassion: "",
  preferences: [],
  personalized: "",
  giftcards: "",
  electronics: "",
  jewellery: "",
  chocolate: "",
  unknown: "false",
  set: "",
  schedule: "",
  select: "",
  date_entered: '',
  pay10: '',
  pay6: '',
  nopay: ''
};

const prevStyle = { background: "#33c3f0", "border-width": "2px" };
const nextStyle = { background: "#33c3f0", "border-width": "2px" };

let database = firebase.database();
let ref = database.ref("schedules");


const App = () => {
  const [formState, setFormState] = useState(initialformState);

  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    console.log('Form state is ', formState)
    ref.push(formState);
    alert("got here")
  };
  const steps = [
    {
      component: (
        <StepOne formState={formState} handleInputChange={handleInputChange} />
      ),
    },
    {
      component: (
        <StepTwo
          setFormState={setFormState}
          formState={formState}
          handleInputChange={handleInputChange}
        />
      ),
    },
    { component: <StepThree /> },
    {
      component: (
        <StepFour handleInputChange={handleInputChange} submit={submit} />
      ),
    },
  ];
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home">
            <MultiStep
              steps={steps}
              prevStyle={prevStyle}
              nextStyle={nextStyle}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
