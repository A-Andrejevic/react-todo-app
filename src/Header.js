import React from "react";
import "./Header.css";

export default function Header() {
  function addTask() {
    console.log("click");
  }

  return (
    <div className="Header">
      <h1>Task Tracker </h1>
      <button className="btn" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
}
