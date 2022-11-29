/**
 * @jest-environment jsdom
 */

import { init } from "../busApp";

jest.mock("./../services/busService.ts");

test("should see times on dom", async () => {
  // Arrange
  expect.assertions(2);

  // Act
  await init();

  // Assert
  expect(document.querySelectorAll("div").length).toBe(5);
  expect(document.querySelectorAll("div")[0].innerHTML).toBe("117: 07:30");
});
