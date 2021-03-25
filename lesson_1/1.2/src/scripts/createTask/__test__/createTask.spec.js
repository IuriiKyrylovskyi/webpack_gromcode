import { onCreateTask } from "../createTask.js";


it("should return new task object with text: \"to buy milk\"", () => {
	const text = "to buy milk";
	const newTask = onCreateTask();
	
	expect(newTask).toEqual({ text: "to buy milk", done: false, createDate: new Date().toISOString() }); 
});
