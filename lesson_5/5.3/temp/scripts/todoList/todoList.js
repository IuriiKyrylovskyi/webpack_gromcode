import { onCreateTask } from "../createTask/createTask.js";
import { onListItemClick } from "../updateTask/updateTask.js";
export var initTodoListHandlers = function initTodoListHandlers() {
  var createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);
  var toggleListElem = document.querySelector('.list'); // toggleListElem.addEventListener('click', onToggleTask);

  toggleListElem.addEventListener('click', onListItemClick);
};