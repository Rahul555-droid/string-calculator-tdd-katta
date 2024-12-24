import { add } from "../stringCalculator";

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number itself for a single number string", () => {
  expect(add("1")).toBe(1);
  expect(add("5")).toBe(5);
});

test("returns the sum for two comma-separated numbers", () => {
  expect(add("1,2")).toBe(3);
  expect(add("10,20")).toBe(30);
});

test("returns the sum for multiple comma-separated numbers", () => {
  expect(add("1,2,3,4")).toBe(10);
  expect(add("10,20,30,40")).toBe(100);
});


test("handles new lines as delimiters", () => {
  expect(add("1\n2,3")).toBe(6);
  expect(add("10\n20,30")).toBe(60);
});


test("supports custom delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
  expect(add("//:\n10:20:30")).toBe(60);
  expect(add("//|\n10|20|30")).toBe(60);
});

test("throws an exception for negative numbers", () => {
  expect(() => add("1,-2,3,-4")).toThrow(
    "Negative numbers not allowed: -2, -4"
  );
});


test("ignores numbers bigger than 1000", () => {
  expect(add("2,1001")).toBe(2);
});
