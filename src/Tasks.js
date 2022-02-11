import React from "react";
import "./Tasks.css";

export default function Tasks() {
  let tasks = [
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
  ];
  return (
    <ul className="Tasks">
      {tasks.map((task, index) => {
        return <li key={index}>{task.name}</li>;
      })}
    </ul>
  );
}
