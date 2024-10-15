import React, { FC, useState, ChangeEvent } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Itask } from "./interfaces";
import { ToDoTask } from "./ToDoTask";
const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<Itask[]>([]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name == "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };
  const addTask = (): void => {
    let newTask = {
      deadline: deadline,
      task: task,
    };
    setTodo([...todo, newTask]);
    setTask("");
    setDeadline(0);
  };
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            name="task"
            value={task}
            placeholder="task..."
            onChange={handleChange}
          />
          <input
            type="number"
            name="deadline"
            value={deadline}
            placeholder="deadline..."
            onChange={handleChange}
          />
        </div>

        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="toDoList">
        {todo.map((task: Itask, key: number) => {
          return <ToDoTask key={key} task={task} />;
        })}
      </div>
    </div>
  );
};

export default App;
