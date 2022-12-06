import { getBusInfo } from "./services/busService";

export const init = async () => {
  let busInfos = await getBusInfo("117");

  for (let i = 0; i < busInfos.length; i++) {
    let container = document.createElement("div");

    container.innerHTML = busInfos[i].bus + ": " + busInfos[i].time;

    document.body.appendChild(container);
  }
};
