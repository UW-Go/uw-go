import { makeAutoObservable } from "mobx";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { NavigationResponse, Avoidances } from "types/types";
import { Requests } from "classes/requests/requests";

export class NavigationViewState {
  private getNodesResponse?: IPromiseBasedObservable<NavigationResponse>;

  private _isLoading = true;
  get isLoading() {
    return this._isLoading;
  }
  constructor() {
    makeAutoObservable(this);
  }

  init = (start: string, end: string, avoidances: Avoidances) => {
    this.getNodesResponse = fromPromise(
      Requests.getNavigation(start, end, avoidances)
    );
  };

  get navResponse(): NavigationResponse | undefined {
    return this.getNodesResponse?.case({
      fulfilled: data => {
        this._isLoading = false;
        return data;
      },
    });
  }
}
