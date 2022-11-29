import axios from "axios";
import { IPerson } from "../models/IPerson";

export const getPersons = async (): Promise<IPerson[]> => {
  let response = await axios.get("some cool url");
  return response.data;
};
