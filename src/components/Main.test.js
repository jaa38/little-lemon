import { initializeTimes, updateTimes } from "./Main";
import { fetchAPI } from "../api";

jest.mock("../api");

test("initializeTimes returns available times from API", () => {
  fetchAPI.mockReturnValue(["17:00", "18:00"]);

  const result = initializeTimes()

  expect(result).toEqual(["17:00", "18:00"]);

})

test("updateTimes returns updated times based on selected date", () => {
  fetchAPI.mockReturnValue(["19:00", "20:00"]);

  const state = [];
  const action = "2024-12-25";

  const result = updateTimes(state, action);

  expect(result).toEqual(["19:00", "20:00"]);
})