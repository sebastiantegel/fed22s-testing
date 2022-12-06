import { IBusInfo } from "./../../models/IBusInfo";

let mockData: IBusInfo[] = [
  { bus: 117, time: "07:30" },
  { bus: 117, time: "07:33" },
  { bus: 117, time: "07:37" },
  { bus: 117, time: "07:41" },
  { bus: 117, time: "07:45" },
];

export const getBusInfo = async (url: string): Promise<IBusInfo[]> => {
  return new Promise((resolve) => {
    resolve(mockData);
  });
};
