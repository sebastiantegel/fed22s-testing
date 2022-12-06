import { IBusInfo } from "./../models/IBusInfo";
import { getBusInfo } from "../services/busService";

let mockData: IBusInfo[] = [
  { bus: 524, time: "07:30" },
  { bus: 824, time: "08:30" },
  { bus: 4, time: "08:00" },
  { bus: 2, time: "23:59" },
];

jest.mock("axios", () => ({
  get: async (url: string) => {
    return new Promise((resolve, reject) => {
      if (url.endsWith("hej")) {
        resolve(mockData);
      } else {
        reject({
          data: "Ingenting finns här",
        });
      }
    });
  },
}));

test("should get mock data", async () => {
  let busInfo: IBusInfo[] = [{ bus: 117, time: "" }];
  try {
    busInfo = await getBusInfo("hej");
  } catch (response: any) {
    expect(response.data).toBe("Ingenting finns här");
  }
});
