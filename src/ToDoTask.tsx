import { Itask } from "./interfaces";

interface props {
  task: Itask;
}
export const ToDoTask = ({ task }: props) => {
  return (
    <div className="task-container">
      <p className="content ml-5">{task.task}</p>
      <p className="task mr-5">{task.deadline}</p>
    </div>
  );
};
