import { sum, mult } from "../calculator";

it("should summ 2 numbers", () => {
	const summ = sum(2, 3);
	
  expect(summ).toEqual(5);
});

it("should multiplay 2 numbers", () => {
	const m = mult(2, 3);
	
  expect(m).toEqual(6);
});