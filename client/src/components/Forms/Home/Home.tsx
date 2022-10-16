import React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { Spacer } from "components/Spacer/Spacer";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export const Home = () => {
  return (
    <PaperWrapper variant="outlined">
      <ImageWrapper>
        <Img src="logo.png" />
      </ImageWrapper>
      <Spacer />
      <FormControlWrapper>
        <InputLabel>Current Location</InputLabel>
        <Spacer height={8} />
        <SelectWrapper native variant="outlined">
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </SelectWrapper>
      </FormControlWrapper>
      <Spacer />
      <FormControlWrapper>
        <InputLabel>Destination</InputLabel>
        <Spacer height={8} />
        <SelectWrapper native variant="outlined">
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </SelectWrapper>
      </FormControlWrapper>
      <Spacer />
      <InputLabel>Avoidance Options</InputLabel>
      <Spacer height={8} />
      <AvoidanceOptionsWrapper>
        <div>
          <FormControlLabel
            control={<Switch color="primary" />}
            label="Elevators"
          />
        </div>
        <div>
          <FormControlLabel
            control={<Switch color="primary" />}
            label="Outside"
          />
        </div>
      </AvoidanceOptionsWrapper>
      <Spacer height={8} />
      <ButtonWrapper
        variant="contained"
        color="primary"
        endIcon={<ArrowRightAltIcon />}
      >
        Let's Go!
      </ButtonWrapper>
    </PaperWrapper>
  );
};

const PaperWrapper = styled(Paper)`
  max-width: 400px;
  width: 100%;
  padding: 16px;
`;

const FormControlWrapper = styled.div`
  width: 100%;
`;

const SelectWrapper = styled(Select)`
  width: 100%;
`;

const ButtonWrapper = styled(Button)`
  width: 100%;
`;

const Img = styled.img`
  width: 112px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const AvoidanceOptionsWrapper = styled.div`
  padding: 8px;
  background-color: #ddd;
  border-radius: 8px;
`;
