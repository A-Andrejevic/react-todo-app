import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Tasks from "./Tasks";
import "./App.css";

function App() {
  let [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Doctor's Appointment",
      day: "Feb 5th at 2:30 PM",
      reminder: true,
    },
    {
      id: 2,
      name: "Meeting at School",
      day: "Feb 6th at 5:30 PM",
      reminder: true,
    },
    {
      id: 3,
      name: "Food Shopping",
      day: "Feb 7th at 8:30 AM",
      reminder: false,
    },
  ]);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Header />
          <Tasks tasks={tasks}/>
        </div>
      </div>
    </div>
  );
}

export default App;
