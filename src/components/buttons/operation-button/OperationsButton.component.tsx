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

const OperationsButton:React.FC<OperationsButtonPropsType> = () => {
  return (
    <>
    </>
  );
}

export default OperationsButton;
