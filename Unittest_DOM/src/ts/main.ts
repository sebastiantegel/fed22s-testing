export function init() {
  document.getElementById("search")?.addEventListener("click", () => {
    let text = (document.getElementById("searchText") as HTMLInputElement)
      .value;
    exports.handleClick(text);
  });
}

export function handleClick(text: string) {
  if (text !== "") {
    (document.getElementById("container") as HTMLDivElement).innerHTML = text;
  }
}

init();
