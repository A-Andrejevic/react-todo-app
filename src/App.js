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

  function deleteTask (id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Header />
          {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} /> ) : ("No tasks to show") }
        </div>
      </div>
    </div>
  );
}

export default App;
