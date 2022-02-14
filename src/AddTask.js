import React, { useState } from "react";
import "./AddTask.css";

export default function AddTask(props) {
  let [task, setTask] = useState("");
  let [day, setDay] = useState("");
  let [reminder, setReminder] = useState(false);

  function createTask(event) {
    setTask(event.target.value);
  }

  function createTime(event) {
    setDay(event.target.value);
  }

  function createReminder(event) {
    setReminder(event.target.value);
  }

  function submitTask(event) {
    event.preventDefault();
  }

  return (
    <form className="AddTaskForm" onSubmit={submitTask}>
      <input
        type="text"
        placeholder="Enter task here"
        value={task}
        onChange={createTask}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter day and time"
        value={day}
        onChange={createTime}
      />
      <br />
      <label>Set Reminder</label>
      <input type="checkbox" value={reminder} onChange={createReminder} />
      <br />
      <input
        type="submit button"
        value="Save task"
        className="btn btn-secondary btn-lg btn-block"
      />
    </form>
  );
}
