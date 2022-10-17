import React, { useState, useEffect } from "react";
import { Avoidances } from "types/types";
import { NavigationViewState } from "components/Navigation/NavigationViewState";
import { observer } from "mobx-react-lite";
import { autorun } from "mobx";

interface INavigation {
  start: string;
  end: string;
  avoidances: Avoidances;
}
export const Navigation = observer(
  ({ start, end, avoidances }: INavigation) => {
    const [viewState] = useState(() => new NavigationViewState());

    useEffect(
      () =>
        autorun(() => {
          viewState.init(start, end, avoidances);
        }),
      []
    );

    console.log(viewState.navResponse);
    return <div>NAV</div>;
  }
);
