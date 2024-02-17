import { useState } from "react";
import { ModalContext } from "../../context/ModalProvider";
import AddEditModals from "./AddEditModals";
import TasksHeader from "./TasksHeader/TasksHeader";
import TasksTable from "./TasksTable/TaskTable";

export default function TasksSections() {
  const [isAdd, setIsAdd] = useState(false);

  return (
    <ModalContext.Provider value={{ isAdd, setIsAdd }}>
      <section className="mb-20" id="tasks">
        {isAdd && <AddEditModals />}
        <div className="container">
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TasksHeader />
            <div className="overflow-auto">
              <TasksTable />
            </div>
          </div>
        </div>
      </section>
    </ModalContext.Provider>
  );
}
