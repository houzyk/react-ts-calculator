import React from "react";

import { BUTTON_TYPE } from "../Button.hoc";

/**
  *@digit_type is the button symbol for a digit 0-9
*/

export type digit_type =
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
  switch (digit_type) {
    case BUTTON_TYPE.ZERO: return <div className="symbol"> 0 </div>;
    case BUTTON_TYPE.ONE: return <div className="symbol"> 1 </div>;
    case BUTTON_TYPE.TWO: return <div className="symbol"> 2 </div>;
    case BUTTON_TYPE.THREE: return <div className="symbol"> 3 </div>;
    case BUTTON_TYPE.FOUR: return <div className="symbol"> 4 </div>;
    case BUTTON_TYPE.FIVE: return <div className="symbol"> 5 </div>;
    case BUTTON_TYPE.SIX: return <div className="symbol"> 6 </div>;
    case BUTTON_TYPE.SEVEN: return <div className="symbol"> 7 </div>;
    case BUTTON_TYPE.EIGHT: return <div className="symbol"> 8 </div>;
    case BUTTON_TYPE.NINE: return <div className="symbol"> 9 </div>;
    default: return null;
  }
}

export default DigitButton;
