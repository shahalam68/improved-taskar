import { useModal } from "../../../hooks/useModal";

export default function TasksActions() {
  const { setIsAdd } = useModal();
  const handleAddTask = () => {
    setIsAdd(true);
  };
  return (
    <>
      {" "}
      <button
        onClick={handleAddTask}
        className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold "
      >
        Add Task
      </button>
      <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">
        Delete All
      </button>
    </>
  );
}
