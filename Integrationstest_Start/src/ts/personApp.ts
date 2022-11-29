import { getPersons } from "./services/personService";
export const init = async () => {
  let persons = await getPersons();

  for (let i = 0; i < persons.length; i++) {
    let container = document.createElement("div");

    container.innerHTML = persons[i].name;

    document.body.appendChild(container);
  }
};
