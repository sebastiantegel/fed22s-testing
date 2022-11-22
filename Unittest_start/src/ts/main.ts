import { Person } from "./models/person";

export function add(x: number, y: number): number {
  return x + y;
}

function init() {
  document.getElementById("search")?.addEventListener("click", () => {
    let numberOne = +(document.getElementById("") as HTMLInputElement).value;
    let numberTwo = +(document.getElementById("") as HTMLInputElement).value;

    let sum = handleClick(numberOne, numberTwo);

    // createHTML(sum);
  });
}

export function handleClick(numberOne: number, numberTwo: number): number {
  // let numberOne = +(document.getElementById("") as HTMLInputElement).value
  // let numberTwo = +(document.getElementById("") as HTMLInputElement).value

  let sum = numberOne + numberTwo;

  return sum;
}

export function addPerson(name: string, list: Person[]) {
  if (name !== "") {
    let doesNameContainSpaces: boolean = name.split(" ").length > 1;

    // console.log(name.split(" "));

    if (!doesNameContainSpaces) {
      let p: Person = new Person(name);

      list.push(p);
    }
  }
}
