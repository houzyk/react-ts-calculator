import React from "react";

import { BUTTON_TYPE } from "../Button.hoc";

/**
  *@digit_type is the button symbol for a digit 0-9
*/

type digit_type =
              BUTTON_TYPE.ZERO |
              BUTTON_TYPE.ONE |
              BUTTON_TYPE.TWO |
              BUTTON_TYPE.THREE |
              BUTTON_TYPE.FOUR |
              BUTTON_TYPE.FIVE |
              BUTTON_TYPE.SIX |
              BUTTON_TYPE.SEVEN |
              BUTTON_TYPE.EIGHT |
              BUTTON_TYPE.NINE
export interface DigitButtonProps {
  digit_type: digit_type
}

const DigitButton:React.FC<DigitButtonProps> = ({ digit_type }) => {
  return (
    <>
    </>
  );
}

export default DigitButton;
