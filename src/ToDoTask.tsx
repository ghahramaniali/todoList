import { Itask } from "./interfaces";

interface props {
  task: Itask;
}
export const ToDoTask = ({ task }: props) => {
  return (
    <div>
      <p className="task">{task.task}</p>
      <p className="task">{task.deadline}</p>
    </div>
  );
};
