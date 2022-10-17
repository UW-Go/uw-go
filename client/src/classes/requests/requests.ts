import axios from "axios";
import { NodeListItem, NavigationResponse, Avoidances } from "types/types";

export class Requests {
  private static get url() {
    return "http://localhost:3001";
  }
  static getLocations = async (): Promise<NodeListItem[]> => {
    const data = await axios.get(`${this.url}/locations`);
    return data.data;
  };

  static getNavigation = async (
    startId: string,
    endId: string,
    avoidances: Avoidances
  ): Promise<NavigationResponse> => {
    const data = await axios.get(`${this.url}/route/1`);
    return data.data;
  };
}
