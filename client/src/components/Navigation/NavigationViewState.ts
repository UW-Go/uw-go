import { makeAutoObservable } from "mobx";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { NavigationResponse, Avoidances, Node, IconType } from "types/types";
import { Requests } from "classes/requests/requests";

export class NavigationViewState {
  private getNodesResponse?: IPromiseBasedObservable<NavigationResponse>;
  private _i = 0;
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

  get nodes(): Node[] {
    return this.navResponse?.nodes ?? [];
  }

  get nNodes() {
    return this.nodes.length;
  }

  get hasNext() {
    return this._i < this.nodes.length - 1;
  }

  get hasPrev() {
    return this._i !== 0;
  }

  get currentNode() {
    return this.nodes[this._i];
  }

  get instructionTitle(): string {
    return this.currentNode?.instruction.title ?? "";
  }

  get instructionDescription(): string {
    return this.currentNode?.instruction.description ?? "";
  }

  get instructionIcon(): IconType {
    return this.currentNode?.instruction.icon ?? 0;
  }

  goNext = () => {
    if (this.hasNext) {
      this._i += 1;
    }
  };

  goPrev = () => {
    if (this.hasPrev) {
      this._i--;
    }
  };
}
