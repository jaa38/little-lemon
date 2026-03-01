import { updateTimes, initializeTimes } from "./Main";
test("updateTimes returns the same state for now", () => {
  const initialState = [
    "17:00",
    "18:00",
    "19:00",
  ];

  const result = updateTimes(initialState, "2024-12-25");

  expect(result).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});