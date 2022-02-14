import "./Tasks.css";
import Task from "./Task";

export default function Tasks(props) {
  return (
    <>
      {props.tasks.map((task) => {
        return <Task key={task.id} task={task} onDelete={props.onDelete} onToggle={props.onToggle}/>;
      })}
    </>
  );
}
