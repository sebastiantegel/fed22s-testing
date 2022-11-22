import { add, addPerson, handleClick } from "../ts/main";
import { Person } from "../ts/models/person";

test("should add correctly", () => {
  // Arrange
  let x: number = 10;
  let y: number = 20;

  // Act
  let sum: number = add(x, y);

  // Assert
  expect(sum).toBe(30);
});

test("should handle click", () => {
  // Arrange
  let numberOne: number = 5;
  let numberTwo: number = 8;

  // Act
  let sum = handleClick(numberOne, numberTwo);

  // Assert
  expect(sum).toBe(13);
});

describe("addPerson", () => {
  test("should add person to list", () => {
    // Arrange
    let theList: Person[] = [new Person("Hanna")];
    let length = theList.length;
    let name = "Sebastian";

    // Act
    addPerson(name, theList);

    // Assert
    expect(theList.length).toBe(length + 1);
    expect(theList[theList.length - 1].name).toBe(name);
  });

  test("should not add empty person to list", () => {
    // Arrange
    let theList: Person[] = [new Person("Hanna")];
    let length = theList.length;
    let name = "";

    // Act
    addPerson(name, theList);

    // Assert
    expect(theList.length).toBe(length);
  });

  test("should not add person containing spaces to list", () => {
    // Arrange
    let theList: Person[] = [new Person("Hanna")];
    let length = theList.length;
    let name = "lorem ipsum";

    // Act
    addPerson(name, theList);

    // Assert
    expect(theList.length).toBe(length);
  });
});
