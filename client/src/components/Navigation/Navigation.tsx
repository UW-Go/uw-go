import React, { useState, useEffect, useRef} from "react";
import { Avoidances } from "types/types";
import { NavigationViewState } from "components/Navigation/NavigationViewState";
import { observer } from "mobx-react-lite";
import { autorun } from "mobx";
import styled from "styled-components";
import { BottomNav } from "components/Navigation/BottomNav/BottomNav";
import { TopNav } from "components/Navigation/TopNav/TopNav";
import { calcGroundYOffset, getArrowImgSrc } from "utils/navigation";
import { Progress } from "components/Navigation/Progress/Progress";

interface INavigation {
  start: string;
  end: string;
  avoidances: Avoidances;
}

const PERCENTAGE_FROM_BOTTOM_OF_IMAGE = 0.25;

export const Navigation = observer(
  ({ start, end, avoidances }: INavigation) => {
    const [viewState] = useState(() => new NavigationViewState());
    const [groundYOffset, setGroundYOffset] = useState(0);
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
      arrow,
      progress
    } = viewState;

    useEffect(
      () =>
        autorun(() => {
          viewState.init(start, end, avoidances);
        }),
      []
    );

    const ref = useRef<HTMLDivElement>(null);

    useEffect(()=>{
      const groundPosition = async () => {
        const containerWidth = ref.current?.clientWidth ?? 0;
        const containerHeight = ref.current?.clientHeight ?? 0;
        setGroundYOffset(await  calcGroundYOffset(containerWidth, containerHeight, currentNode.imageUrl, PERCENTAGE_FROM_BOTTOM_OF_IMAGE));
      }
      if(viewState.isLoading){
        return;
      }
      groundPosition();
    }, [currentNode, viewState])

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
          <ImageWrapper src={currentNode.imageUrl} ref={ref}>
            <GroundWrapper height={groundYOffset}>
              {
                arrow ? (
                  <StyledImage src={getArrowImgSrc(arrow.type)} x={arrow.x} y={arrow.y}/>
                ): null 
              }
            </GroundWrapper>
          </ImageWrapper>
          <Progress percentage={progress}/>
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
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  overflow: hidden;
`;

interface IGroundWrapper{
  height: number;
}
const GroundWrapper = styled.div<IGroundWrapper>`
  width: 100%;
  position: absolute;
  height: 50%;
  top: ${props=>props.height}px;
  transform: perspective(50em) rotateX(70deg);
  transform-origin: center top;
  display: flex;
  justify-content: center;
`
interface IStyledImage{
  x: number;
  y: number
}
const StyledImage = styled.img<IStyledImage>`
  margin-left: ${props=>props.x}px;
  margin-top: ${props=>props.y}px;
  image-rendering: -webkit-optimize-contrast;
  width: 220px;
  height: 880px;
  animation-name: pulse;
  animation-duration: 2.4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  
  @keyframes pulse {
    0%   {
      opacity: 0.96;
    }
    50%  {
      opacity: 0.86;
    }
    100% {
      opacity: 0.96;
    }
  }
`
