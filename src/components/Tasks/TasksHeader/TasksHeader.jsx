import SearchTasks from "./SearchTasks";
import TasksActions from "./TasksAsctions";

export default function TasksHeader() {
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <SearchTasks />
        <TasksActions />
      </div>
    </div>
  );
}
