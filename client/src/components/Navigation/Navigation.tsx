import React, { useState, useEffect } from "react";
import { Avoidances } from "types/types";
import { NavigationViewState } from "components/Navigation/NavigationViewState";
import { observer } from "mobx-react-lite";
import { autorun } from "mobx";
import styled from "styled-components";
import { BottomNav } from "components/Navigation/BottomNav/BottomNav";
import { TopNav } from "components/Navigation/TopNav/TopNav";

interface INavigation {
  start: string;
  end: string;
  avoidances: Avoidances;
}
export const Navigation = observer(
  ({ start, end, avoidances }: INavigation) => {
    const [viewState] = useState(() => new NavigationViewState());
    const {
      currentNode,
      goNext,
      goPrev,
      hasNext,
      hasPrev,
      navResponse,
      instructionTitle,
      instructionDescription,
      instructionIcon,
    } = viewState;

    useEffect(
      () =>
        autorun(() => {
          viewState.init(start, end, avoidances);
        }),
      []
    );

    if (viewState.isLoading) {
      return <div>Loading</div>;
    }
    return (
      <MainWrapper>
        <NavWrapper>
          <TopNav
            title={instructionTitle}
            description={instructionDescription}
            icon={instructionIcon}
          />
          <ImageWrapper src={currentNode.imageUrl} />
          <BottomNav
            onNext={goNext}
            onPrev={goPrev}
            canNext={hasNext}
            canPrev={hasPrev}
            arrivalTime={navResponse?.arrivalTime ?? ""}
          />
        </NavWrapper>
      </MainWrapper>
    );
  }
);

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const NavWrapper = styled.div`
  height: 100%;
  max-height: 1180px;
  width: 100%;
  max-width: 820px;
  display: flex;
  flex-direction: column;
`;

interface IImageWrapper {
  src: string;
}

const ImageWrapper = styled.div<IImageWrapper>`
  background-image: url(${props => props.src});
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  flex: 1;
`;
