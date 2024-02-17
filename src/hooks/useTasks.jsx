import { useContext } from "react";
import { TaskContext } from "../context/TasksProvider";

export const useTasks = () => useContext(TaskContext);
