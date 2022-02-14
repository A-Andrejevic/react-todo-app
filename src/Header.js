import React from "react";
import AddTask from "./AddTask";
import "./Header.css";

export default function Header() {
  function addTask() {
    console.log("click");
  }

  return (
    <div className="Header">
      <h1>Task Tracker </h1>
      <AddTask />
      <button className="btn" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
}
