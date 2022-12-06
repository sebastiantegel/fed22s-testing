import { IBusInfo } from "./../models/IBusInfo";
import axios from "axios";

export const getBusInfo = async (searchText: string): Promise<IBusInfo[]> => {
  try {
    let response = await axios.get<IBusInfo[]>(
      "http://myurltoapi?search=" + searchText
    );
    return response.data;
  } catch {
    return [];
  }
};
