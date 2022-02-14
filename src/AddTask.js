import React from "react";
import "./AddTask.css";

export default function AddTask() {
  return (
    <form className="AddTask">
      <input type="text" placeholder="Enter task here" />
      <br />
      <br />
      <input type="text" placeholder="Enter day and time" />
      <br />
      <input type="checkbox" />
      <input type="submit" value="Save task" />
    </form>
  );
}
