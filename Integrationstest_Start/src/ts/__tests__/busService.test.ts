import { IBusInfo } from "./../models/IBusInfo";
import { getBusInfo } from "../services/busService";

jest.mock("./../services/busService.ts");

test("should get mock data", async () => {
  let busInfo: IBusInfo[] = await getBusInfo();

  expect(busInfo.length).toBeGreaterThan(0);
  expect(busInfo.length).toBe(5);
  expect(busInfo[0].bus).toBe(117);
});
