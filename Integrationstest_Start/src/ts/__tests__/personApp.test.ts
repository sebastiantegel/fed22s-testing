/**
 * @jest-environment jsdom
 */

import { IPerson } from "../models/IPerson";
import { init } from "./../personApp";

// let mockData: IPerson[] = [
//   { name: "Sebastian", age: 43, isMarried: true },
//   { name: "Hanna", age: 42, isMarried: true },
//   { name: "Astrid", age: 12, isMarried: false },
//   { name: "Alvar", age: 12, isMarried: false },
// ];

// jest.mock("./../services/personService", () => ({
//   getPersons: async (): Promise<IPerson[]> => {
//     return new Promise((resolve) => {
//       resolve(mockData);
//     });
//   },
// }));

jest.mock("./../services/personService.ts");

test("should run init", async () => {
  await init();

  expect(document.querySelectorAll("div").length).toBe(4);
});
