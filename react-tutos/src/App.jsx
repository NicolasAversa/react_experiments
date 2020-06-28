import React from "react";
import Person from "./containers/Person/Person.jsx";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>This is a React app, Hope you like it!</h1>
      <h4>Let's start the adventure!</h4>
      <Person name="Nicolas" age="24" />
      <Person name="Juan Manuel" age="26" />
      <Person name="Florencia" age="27">
        Me gusta la papa!
      </Person>
    </div>
  );
};

export default App;
