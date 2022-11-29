import { getPersons } from "./../services/personService";

jest.mock("./../services/personService.ts");

test("should get test data", async () => {
  let persons = await getPersons();

  expect(persons.length).toBe(4);
});
