import React from "react";
import AddTask from "./AddTask";
import "./Header.css";

export default function Header(props) {
  function addTask() {
    console.log("click");
  }

  return (
    <div className="Header">
      <h1>Task Tracker </h1>
      <AddTask onAdd={props.onAdd} />
      <button className="btn" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
}
