import "core-js/modules/es.promise.js";
import "core-js/modules/es.object.to-string.js";
// const baseUrl = 'https://crudcrud.com/api/3f3c9c9d2918435cbe597a451e870d47/tasks';
// const baseUrl = 'https://6051234753460900176713fa.mockapi.io';
var baseUrl = 'https://6051365453460900176715c6.mockapi.io/tasks'; // const mapTasks = tasks => tasks.map(({ _id, ...rest }) => ({ ...rest, id: _id }));

export var getTasksList = function getTasksList() {
  return fetch(baseUrl).then(function (response) {
    return response.json();
  });
}; // .then(tasks => mapTasks(tasks));

export var createTask = function createTask(taskData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(taskData)
  });
};
export var updateTask = function updateTask(taskId, updatedtaskData) {
  return fetch("".concat(baseUrl, "/").concat(taskId), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(updatedtaskData)
  });
};
export var deleteTask = function deleteTask(taskId) {
  return fetch("".concat(baseUrl, "/").concat(taskId), {
    method: 'DELETE'
  });
};