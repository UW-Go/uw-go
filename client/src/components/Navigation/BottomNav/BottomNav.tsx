import React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import LeftIcon from "@material-ui/icons/ChevronLeft";
import RightIcon from "@material-ui/icons/ChevronRight";
import blue from "@material-ui/core/colors/blue";
import { Spacer } from "components/Spacer/Spacer";
import { observer } from "mobx-react-lite";
import { Typography } from "components/MUI/Typography";

interface IButtonNav {
  onNext: () => void;
  onPrev: () => void;
  canNext: boolean;
  canPrev: boolean;
  arrivalTime: string;
}
export const BottomNav = observer(
  ({ onNext, onPrev, canNext, canPrev, arrivalTime }: IButtonNav) => {
    return (
      <MainWrapper>
        <IconButtonWrapper isDisabled={!canPrev}>
          <IconButton onClick={onPrev} disabled={!canPrev}>
            <StyledLeftIcon />
          </IconButton>
        </IconButtonWrapper>
        <Spacer width={16} />
        <TextWrapper>
          <Typography variant="subtitle1" lineheight={20} $color="white">
            ARRIVAL TIME:
          </Typography>
          <Typography variant="h3" bold lineheight={50} $color="white">
            {arrivalTime}
          </Typography>
        </TextWrapper>
        <Spacer width={16} />
        <IconButtonWrapper isDisabled={!canNext}>
          <IconButton onClick={onNext} disabled={!canNext}>
            <StyledRightIcon />
          </IconButton>
        </IconButtonWrapper>
      </MainWrapper>
    );
  }
);

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${blue[800]};
  padding: 16px;
  box-sizing: border-box;
`;

const StyledLeftIcon = styled(LeftIcon).attrs({
  fontSize: "large",
})`
  color: white;
  width: 56px;
`;

const StyledRightIcon = styled(RightIcon).attrs({
  fontSize: "large",
})`
  color: white;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
interface IIconButton {
  isDisabled?: boolean;
}
const IconButtonWrapper = styled.div<IIconButton>`
  opacity: ${props => (props.isDisabled ? "0.2" : "1")};
`;
