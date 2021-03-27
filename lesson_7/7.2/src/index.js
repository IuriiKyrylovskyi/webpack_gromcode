import { initTodoListHandlers } from "./list/todoList.js";
import { renderTasks } from "./list/renderTasks.js";
import { getTasksList } from "./list/tasksGateway.js";
import { setItem } from "./list/storage.js";

document.addEventListener("DOMContentLoaded", () => {
  getTasksList().then((taskList) => {
    setItem("taskList", taskList);
    renderTasks();
  });
  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === "tasksList") {
    renderTasks();
  }
};
window.addEventListener("storage", onStorageChange);

// 1. Get data from server
// 2. Save data to front-end storage
