import { IPerson } from "../../models/IPerson";

let mockData: IPerson[] = [
  { name: "Sebastian", age: 43, isMarried: true },
  { name: "Hanna", age: 42, isMarried: true },
  { name: "Astrid", age: 12, isMarried: false },
  { name: "Alvar", age: 12, isMarried: false },
];

export const getPersons = async (): Promise<IPerson[]> => {
  return new Promise((resolve) => {
    resolve(mockData);
  });
};
