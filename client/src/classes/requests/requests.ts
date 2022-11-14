import axios from "axios";
import { NodeListItem, NavigationResponse, Avoidances } from "types/types";

const BASE_URL = process.env.REACT_APP_BACKEND_ROUTES ? "http://localhost:8000/api" : "http://localhost:3001"
export class Requests {
  private static get url() {
    return BASE_URL;
  }
  static getLocations = async (): Promise<NodeListItem[]> => {
    const data = await axios.get(`${this.url}/locations`);
    return data.data.nodes;
  };

  static getNavigation = async (
    startId: string,
    endId: string,
    avoidances: Avoidances
  ): Promise<NavigationResponse> => {
    const data = process.env.REACT_APP_BACKEND_ROUTES ? 
      await axios.get(`${this.url}/route?start=${startId}&end=${endId}&options=${JSON.stringify(avoidances)}`) : 
      await axios.get(`${this.url}/route/1`);
    return data.data;
  };
}

export default Requests;