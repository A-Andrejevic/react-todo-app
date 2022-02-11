import React from "react";

export default function Task(props) {
  return (
    <div className="Task">
      <h4>{props.task.name}</h4>
    </div>
  );
}
