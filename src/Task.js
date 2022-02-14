import React from "react";
import { FiX } from "react-icons/fi";
import "./AddTask.css";

export default function Task(props) {
  return (
    <div className={`Task ${props.task.reminder ? "reminder" : ""}`} onDoubleClick={() => props.onToggle(props.task.id)}>
      <h4>{props.task.name} <FiX onClick={() => props.onDelete(props.task.id)} /> </h4>
      <h6>{props.task.day}</h6>
    </div>
  );
}
