import { getItem } from './storage';
import { renderTasks } from './renderTasks';

export const validateTaskLength = (inputText) => inputText.length < 5; // ? true: false;

export const onChangeStatus = (event) => {
  const checkedId = event.target.getAttribute('data-id');

  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }

  const TaskText = event.target.closest('.list__item').innerText;
  // console.log('length', TaskText.length);
  if (validateTaskLength(TaskText)) {
    event.preventDefault();
    // eslint-disable-next-line no-alert
    alert('invalid task');
    return;
  }

  const changedTask = getItem.find((el) => el.id === +checkedId);
  changedTask.done = event.target.checked;

  // console.log('done tasks on change', getItem);
  renderTasks(getItem);
};
