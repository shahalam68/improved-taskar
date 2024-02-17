import { createContext, useReducer, useState } from "react";
import { getAllTasks } from "../data/tasks";
import taskReducer from "../reducer/taskReducer";

export const TaskContext = createContext();

export default function TasksProvider({ children }) {
  const initialState = getAllTasks();
  const [tasks, setTasks] = useReducer(taskReducer, initialState);
  const [searchText, setSearchText] = useState("");

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, searchText, setSearchText }}
    >
      {children}
    </TaskContext.Provider>
  );
}
