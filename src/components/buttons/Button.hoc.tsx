import React from "react";
import styled, { css } from "styled-components";

// components
import ClearButton from "./clear-button/ClearButton.component";
import DeleteButton from "./delete-button/DeleteButton.component";
import DigitButton from "./digit-button/DigitButton.component";
import DotButton from "./dot-button/DotButton.component";
import EqualsButton from "./equals-button/EqualsButton.component";
import OperationsButton from "./operation-button/OperationsButton.component";
import SignButton from "./sign-button/SignButton.component";

/**
  *@button_type is the button symbol
*/

export enum BUTTON_TYPE {
  ClEAR,
  DELETE,
  POWER,
  DIVIDE,
  SEVEN,
  EIGHT,
  NINE,
  MULTIPLY,
  FOUR,
  FIVE,
  SIX,
  MINUS,
  ONE,
  TWO,
  THREE,
  ADD,
  ZERO,
  DOT,
  SIGN,
  EQUAL
  }

interface ButtonHocProps {
  button_type: BUTTON_TYPE;
}

const ButtonHOC: React.FC<ButtonHocProps> = ({ button_type }) => {

  const renderSwitch = () => {
    switch (button_type) {
      // display controls
      case BUTTON_TYPE.ClEAR: return <ClearButton />;
      case BUTTON_TYPE.DELETE: return <DeleteButton />;


      // symbols
      case BUTTON_TYPE.SIGN: return <SignButton />;
      case BUTTON_TYPE.EQUAL: return <EqualsButton />;
      case BUTTON_TYPE.DOT: return <DotButton />;

      // operations
      case
          BUTTON_TYPE.DIVIDE ||
          BUTTON_TYPE.MULTIPLY ||
          BUTTON_TYPE.ADD ||
          BUTTON_TYPE.MINUS ||
          BUTTON_TYPE.POWER: return <OperationsButton operation_type={button_type}/>;

      // digits
      case
          BUTTON_TYPE.ZERO ||
          BUTTON_TYPE.ONE ||
          BUTTON_TYPE.TWO ||
          BUTTON_TYPE.THREE ||
          BUTTON_TYPE.FOUR ||
          BUTTON_TYPE.FIVE ||
          BUTTON_TYPE.SIX ||
          BUTTON_TYPE.SEVEN ||
          BUTTON_TYPE.EIGHT ||
          BUTTON_TYPE.NINE : return <DigitButton digit_type={button_type}/>

      default: return;
    }
  }

  const handleInput = () => {

  }

  return (
    <StyleWrapper onClick={() => handleInput}>
      {renderSwitch()}
    </StyleWrapper>
  );
}

const styles = css`
  background-color: black;
  border-radius: 50%;
  cursor: pointer;
`

const StyleWrapper = styled.div`
  ${styles}
`

export default ButtonHOC;
