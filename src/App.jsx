import { ToastContainer } from "react-toastify";
import TasksSections from "./components/Tasks/TasksSections";
import Hero from "./components/shared/Hero";
import NavBar from "./components/shared/NavBar";
import TasksProvider from "./context/TasksProvider";
export default function App() {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <TasksProvider>
        <TasksSections />
        <ToastContainer />
      </TasksProvider>
    </>
  );
}
