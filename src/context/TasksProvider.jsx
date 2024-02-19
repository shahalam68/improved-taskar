import { createContext, useReducer, useState } from "react";
import { getAllTasks } from "../data/tasks";
import taskReducer from "../reducer/taskReducer";

export const TaskContext = createContext();

export default function TasksProvider({ children }) {
  const initialState = getAllTasks();
  const [tasks, dispatch] = useReducer(taskReducer, initialState);
  const [searchText, setSearchText] = useState("");

  return (
    <TaskContext.Provider
      value={{ tasks, dispatch, searchText, setSearchText }}
    >
      {children}
    </TaskContext.Provider>
  );
}
