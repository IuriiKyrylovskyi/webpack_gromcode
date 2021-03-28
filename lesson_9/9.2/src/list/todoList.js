import { onCreateTask } from './createTask';
import { onListItemClick } from './updateTask';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const toggleListElem = document.querySelector('.list');
  // toggleListElem.addEventListener('click', onToggleTask);
  toggleListElem.addEventListener('click', onListItemClick);
};
