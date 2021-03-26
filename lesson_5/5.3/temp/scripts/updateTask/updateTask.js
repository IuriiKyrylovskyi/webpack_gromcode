import "core-js/modules/es.promise.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.array.find.js";
import { renderTasks } from "../renderTasks/renderTasks.js";
import { getItem, setItem } from "../storage/storage.js";
import { updateTask, getTasksList, deleteTask } from "../tasksGateway/tasksGateway.js";

var afterChangeTask = function afterChangeTask() {
  return Promise.resolve().then(function () {
    return getTasksList();
  }).then(function (newTasksList) {
    setItem('tasksList', newTasksList);
    renderTasks();
  });
};

var onDeleteTask = function onDeleteTask(taskId) {
  deleteTask(taskId).then(function () {
    return afterChangeTask();
  }); // .then(() => getTasksList())
  // .then(newTasksList => {
  //   setItem('tasksList', newTasksList);
  //   renderTasks();
  // });
};

var onToggleTask = function onToggleTask(tasksList, taskId, done) {
  var _tasksList$find = tasksList.find(function (task) {
    return task.id === taskId;
  }),
      text = _tasksList$find.text,
      createDate = _tasksList$find.createDate;

  var updatedTask = {
    text: text,
    createDate: createDate,
    done: done,
    finishDate: done ? new Date().toISOString() : null
  };
  updateTask(taskId, updatedTask).then(function () {
    return afterChangeTask();
  }); // .then(() => getTasksList())
  // .then(newTasksList => {
  //   setItem('tasksList', newTasksList);
  //   renderTasks();
  // });
};

export var onListItemClick = function onListItemClick(e) {
  var taskId = e.target.dataset.id;

  if (e.target.classList.contains('list__item-delete-btn')) {
    onDeleteTask(taskId);
  }

  if (e.target.classList.contains('list__item-checkbox')) {
    // const taskId = e.target.dataset.id;
    var tasksList = getItem('tasksList');
    var done = e.target.checked;
    onToggleTask(tasksList, taskId, done);
  }
}; // 1. Prepare data
// 2. Update data to db
// 3. Read new data from servre
// 4. Save new data to front - end storage
// 5. Update UI based on new data