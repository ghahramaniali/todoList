import React, { FC, useState, ChangeEvent } from "react";
import "./App.css";
import { Itask } from "./interfaces";
import { ToDoTask } from "./ToDoTask";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import moment, { Moment } from "moment-jalaali"; // Import moment-jalaali
import { DatePicker } from "@react-shamsi/datepicker";
import "@react-shamsi/calendar/dist/styles.css";
import "@react-shamsi/datepicker/dist/styles.css";
// If you want to use the time picker
import "@react-shamsi/timepicker/dist/styles.css";

// Set moment to use Jalali by default
moment.loadPersian({ usePersianDigits: true });

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<Moment | null>(moment()); // Set default to today's Jalali date
  const [todo, setTodo] = useState<Itask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    }
  };

  // Convert Date to Moment
  const handleDateChange = (newDate: Date): void => {
    console.warn(111);

    console.warn(newDate);

    const convertedDate = moment(newDate); // Convert native Date object to Moment object
    setDeadline(convertedDate);
    console.warn(convertedDate);
  };

  const addTask = (): void => {
    if (!task || !deadline) return;
    let newTask = {
      deadline: deadline.format("jYYYY/jMM/jDD"), // Use Jalali format for deadline
      task: task,
    };
    setTodo([...todo, newTask]);
    setTask("");
    setDeadline(moment()); // Reset deadline to today's Jalali date after adding task
  };

  return (
    <div className="App">
      <div className="container pt-7 m-5 h-5/6">
        <div className="toDoList text-center text-2xl text-white">
          {todo.map((task: Itask, key: number) => {
            return <ToDoTask key={key} task={task} />;
          })}
        </div>
      </div>
      <div className="inputContainer rounded-lg bg-green-950 h-12 w-9/12 px-5">
        <input
          type="text"
          name="task"
          value={task}
          placeholder="task..."
          onChange={handleChange}
          className="shadow bg-green-950 appearance-none rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          id="task"
        />

        <DatePicker onChange={handleDateChange} />
        <div className="header" onClick={addTask}>
          <FontAwesomeIcon icon={faPlus} className="white-icon " />
        </div>
      </div>
    </div>
  );
};

export default App;
