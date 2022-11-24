/**
 * @jest-environment jsdom
 */

import * as functions from "../ts/main";

describe("HandleClick", () => {
  test("should not add text to div", () => {
    document.body.innerHTML = `
    <div id="container">Lorem</div>
  `;
    let text: string = "";

    functions.handleClick(text);

    expect(document.getElementById("container")?.innerHTML).toBe("Lorem");
  });

  test("should add text to div", () => {
    document.body.innerHTML = `
    <div id="container">Lorem</div>
  `;
    let text: string = "ipsum";

    functions.handleClick(text);

    expect(document.getElementById("container")?.innerHTML).toBe("ipsum");
  });
});

describe("Init", () => {
  test("should be able to click", () => {
    // arrange
    let spy = jest.spyOn(functions, "handleClick").mockReturnValue();

    document.body.innerHTML = `
    <input type="text" id="searchText" />
    <button id="search">Sök</button>`;

    functions.init();

    // act
    (document.getElementById("searchText") as HTMLInputElement).value =
      "Lorem ipsum";
    document.getElementById("search")?.click();

    // assert
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("Lorem ipsum");
  });
});
