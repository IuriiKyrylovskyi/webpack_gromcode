import "core-js/modules/es.array.find.js";
import { getItem, setItem } from "../storage/storage.js";
import { renderTasks } from "../renderTasks/renderTasks.js";
export var validateTaskLength = function validateTaskLength(inputText) {
  return inputText.length < 5;
}; // ? true: false;

export var onChangeStatus = function onChangeStatus(event) {
  var checkedId = event.target.getAttribute('data-id');

  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }

  var TaskText = event.target.closest('.list__item').innerText;
  console.log('length', TaskText.length);

  if (validateTaskLength(TaskText)) {
    event.preventDefault();
    alert('invalid task');
    return;
  }

  var changedTask = getItem.find(function (el) {
    return el.id === +checkedId;
  });
  changedTask.done = event.target.checked;
  console.log('done tasks on change', getItem);
  renderTasks(getItem);
};