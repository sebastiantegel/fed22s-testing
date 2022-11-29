import { IBusInfo } from "./../models/IBusInfo";
import axios from "axios";

export const getBusInfo = async (): Promise<IBusInfo[]> => {
  let response = await axios.get<IBusInfo[]>("....");
  return response.data;
};
