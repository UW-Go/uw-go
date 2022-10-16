import axios from "axios";
import { NodeListItem } from "types/types";

export class Requests {
  static getLocations = async (): Promise<NodeListItem[]> => {
    const data = await axios.get(`http://localhost:3001/locations`);
    return data.data;
  };
}
