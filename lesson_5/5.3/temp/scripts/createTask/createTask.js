import { createTask, getTasksList } from "../tasksGateway/tasksGateway.js";
import { renderTasks } from "../renderTasks/renderTasks.js";
import { setItem } from "../storage/storage.js";
export var onCreateTask = function onCreateTask() {
  var taskTitleInputElem = document.querySelector('.task-input');
  var text = taskTitleInputElem.value;

  if (!text) {
    return;
  }

  taskTitleInputElem.value = '';
  var newTask = {
    text: text,
    done: false,
    createDate: new Date().toISOString() // id: Math.random().toString(), // server generates id

  };
  createTask(newTask).then(function () {
    return getTasksList();
  }).then(function (newTasksList) {
    setItem('tasksList', newTasksList);
    renderTasks();
  });
}; // 1. Prepare data
// 2. Write data to db
// 3. Read new data from servre
// 4. Save new data to front - end storage
// 5. Update UI based on new data