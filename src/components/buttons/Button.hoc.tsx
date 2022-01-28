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
import { PadProps } from "../pad/Pad.component";

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


interface ButtonHocProps extends PadProps{
  button_type: BUTTON_TYPE;
}

const ButtonHOC: React.FC<ButtonHocProps> = ({ button_type, input_handler, clearAll_handler, clear_handler, dot_handler}) => {

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
      case BUTTON_TYPE.DIVIDE: return <OperationsButton operation_type={button_type}/>;
      case BUTTON_TYPE.MULTIPLY: return <OperationsButton operation_type={button_type}/>;
      case BUTTON_TYPE.ADD: return <OperationsButton operation_type={button_type}/>;
      case BUTTON_TYPE.MINUS: return <OperationsButton operation_type={button_type}/>;
      case BUTTON_TYPE.POWER: return <OperationsButton operation_type={button_type}/>;

      // digits
      case BUTTON_TYPE.ZERO: return <DigitButton digit_type={button_type}/>
      case BUTTON_TYPE.ONE: return <DigitButton digit_type={button_type}/>
      case BUTTON_TYPE.TWO: return <DigitButton digit_type={button_type}/>
      case BUTTON_TYPE.THREE: return <DigitButton digit_type={button_type}/>
      case BUTTON_TYPE.FOUR: return <DigitButton digit_type={button_type}/>
      case BUTTON_TYPE.FIVE: return <DigitButton digit_type={button_type}/>
      case BUTTON_TYPE.SIX: return <DigitButton digit_type={button_type}/>
      case BUTTON_TYPE.SEVEN: return <DigitButton digit_type={button_type}/>
      case BUTTON_TYPE.EIGHT: return <DigitButton digit_type={button_type}/>
      case BUTTON_TYPE.NINE: return <DigitButton digit_type={button_type}/>
      default: return;
    }
  }

  const handleInput = () => {
    if (button_type === BUTTON_TYPE.ZERO ||
        button_type === BUTTON_TYPE.ONE ||
        button_type === BUTTON_TYPE.TWO ||
        button_type === BUTTON_TYPE.THREE ||
        button_type === BUTTON_TYPE.FOUR ||
        button_type === BUTTON_TYPE.FIVE ||
        button_type === BUTTON_TYPE.SIX ||
        button_type === BUTTON_TYPE.SEVEN ||
        button_type === BUTTON_TYPE.EIGHT ||
        button_type === BUTTON_TYPE.NINE) input_handler(button_type);
    if (button_type === BUTTON_TYPE.ClEAR) clearAll_handler(button_type);
    if (button_type === BUTTON_TYPE.DELETE) clear_handler(button_type);
    if (button_type === BUTTON_TYPE.DOT) dot_handler(button_type);
  }

  return (
    <StyleWrapper onClick={handleInput}>
      {renderSwitch()}
    </StyleWrapper>
  );
}

const styles = css`
  background-color: black;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  .symbol {
    color: white;
    font-size: 25px;
    font-weight: 900;
    flex-grow: 0;
  }
`

const StyleWrapper = styled.div`
  ${styles}
`

export default ButtonHOC;
