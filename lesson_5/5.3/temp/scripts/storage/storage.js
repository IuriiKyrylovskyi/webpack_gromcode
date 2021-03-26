// const storage = {};
// [
//   { text: 'Buy', done: false, id: 1 },
//   { text: 'Pick up Tom from airport', done: true, id: 2 },
//   { text: 'Visit party', done: false, id: 3 },
//   { text: 'Visit doctor', done: false, id: 4 },
//   { text: 'Buy meat', done: true, id: 5 },
// ];
export var setItem = function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value)); // Object.assign(storage, { [key]: value });
};
export var getItem = function getItem(key) {
  return JSON.parse(localStorage.getItem(key));
};