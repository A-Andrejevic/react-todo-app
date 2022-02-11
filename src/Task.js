import React from "react";
import { FiX } from "react-icons/fi";

export default function Task(props) {
  return (
    <div className="Task">
      <h4>{props.task.name} <FiX onClick={() => props.onDelete(props.task.id)} /> </h4>
      <h6>{props.task.day}</h6>
    </div>
  );
}
