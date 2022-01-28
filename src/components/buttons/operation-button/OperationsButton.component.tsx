import React from "react";

import { BUTTON_TYPE } from "../Button.hoc";

/**
  *@operation_type is the button symbol for an arithmetic operation
*/

export type operation_type =
                      BUTTON_TYPE.ADD |
                      BUTTON_TYPE.POWER |
                      BUTTON_TYPE.DIVIDE |
                      BUTTON_TYPE.MINUS |
                      BUTTON_TYPE.MULTIPLY

interface OperationsButtonPropsType {
  operation_type: operation_type
}

const OperationsButton:React.FC<OperationsButtonPropsType> = ({ operation_type }) => {
  switch (operation_type) {
    case BUTTON_TYPE.ADD: return <div className="symbol"> + </div>;
    case BUTTON_TYPE.MINUS: return <div className="symbol"> - </div>;
    case BUTTON_TYPE.POWER: return <div className="symbol"> * </div>;
    case BUTTON_TYPE.MULTIPLY: return <div className="symbol"> X </div>;
    case BUTTON_TYPE.DIVIDE: return <div className="symbol"> / </div>;
    default: return null;
  }
}

export default OperationsButton;
