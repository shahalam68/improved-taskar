import { useTasks } from "../../../hooks/useTasks";
import TasksList from "./TasksList";

export default function TasksTable() {
  const { tasks, searchText } = useTasks();

  const searchResult = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchText.trim().toLowerCase())
  );
  console.log(searchResult);
  return (
    <table className="table-fixed overflow-auto xl:w-full">
      <thead>
        <tr>
          <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
            {" "}
            Title{" "}
          </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
            Description
          </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
            {" "}
            Tags{" "}
          </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
            {" "}
            Priority{" "}
          </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
            {" "}
            Options{" "}
          </th>
        </tr>
      </thead>
      <tbody>
        {" "}
        {searchText.trim() === "" ? (
          // Render all tasks when search text is empty
          tasks.map((task) => <TasksList key={task.id} task={task} />)
        ) : searchResult.length > 0 ? (
          // Render search results if there are any
          searchResult.map((task) => <TasksList key={task.id} task={task} />)
        ) : (
          // Render no results found message if search returned empty
          <tr>
            <td colSpan="6" className="text-center font-semibold text-xl">
              No tasks found for{" "}
              <span className="text-[#00D991A1]">{searchText}</span>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
