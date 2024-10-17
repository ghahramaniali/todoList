import React, { FC, useState, ChangeEvent } from "react";
import "./App.css";
import { Itask } from "./interfaces";
import { ToDoTask } from "./ToDoTask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<Itask[]>([]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
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
      <div className="container pt-7 m-5 h-5/6">
        <div className="toDoList text-center text-2xl  text-white">
          {todo.map((task: Itask, key: number) => {
            return <ToDoTask key={key} task={task} />;
          })}
        </div>
      </div>
      <div className="inputContainer">
        <input
          type="text"
          name="task"
          value={task}
          placeholder="task..."
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="task"
        />
        <input
          type="number"
          name="deadline"
          value={deadline}
          placeholder="deadline..."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          id="deadline"
        />
        <div className="header">
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
    </div>
  );
};

export default App;
