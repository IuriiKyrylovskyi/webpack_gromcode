import { onCreateTask } from "../createTask.js";
it("should return new task object with text: \"to buy milk\"", function () {
  var text = "to buy milk";
  var newTask = onCreateTask();
  expect(newTask).toEqual({
    text: "to buy milk",
    done: false,
    createDate: new Date().toISOString()
  });
});