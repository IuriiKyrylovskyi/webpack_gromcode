import { initTodoListHandlers } from "./todoList/todoList.js";
import { renderTasks } from "./renderTasks/renderTasks.js";
import { getTasksList } from "./tasksGateway/tasksGateway.js";
import { setItem } from "./storage/storage.js";
document.addEventListener('DOMContentLoaded', function () {
  getTasksList().then(function (taskList) {
    setItem('taskList', taskList);
    renderTasks();
  });
  initTodoListHandlers();
});

var onStorageChange = function onStorageChange(e) {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange); // 1. Get data from server
// 2. Save data to front-end storage