import React from "react";
import styled, { css } from "styled-components";

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
  is_operation: [operation_type?]
}

const OperationsButton:React.FC<OperationsButtonPropsType> = ({ operation_type, is_operation }) => {
  switch (operation_type) {
    case BUTTON_TYPE.ADD: return <StyleWrapper op_type ={BUTTON_TYPE.ADD} className="symbol" is_operation={is_operation}> + </StyleWrapper>;
    case BUTTON_TYPE.MINUS: return <StyleWrapper op_type ={BUTTON_TYPE.MINUS} className="symbol" is_operation={is_operation}> - </StyleWrapper>;
    case BUTTON_TYPE.POWER: return <StyleWrapper op_type ={BUTTON_TYPE.POWER} className="symbol" is_operation={is_operation}> * </StyleWrapper>;
    case BUTTON_TYPE.MULTIPLY: return <StyleWrapper op_type ={BUTTON_TYPE.MULTIPLY} className="symbol" is_operation={is_operation}> X </StyleWrapper>;
    case BUTTON_TYPE.DIVIDE: return <StyleWrapper op_type ={BUTTON_TYPE.DIVIDE} className="symbol" is_operation={is_operation}> / </StyleWrapper>;
    default: return null;
  }
}

const StyleWrapper = styled.div<{ className: string, 
                                  is_operation: [operation_type?],
                                  op_type: operation_type
                                }>`
  ${props => (props.is_operation.length > 0 && props.is_operation.includes(props.op_type)) ? activated : deactivated}
`

const activated = css`
  font-weight: 900;
`

const deactivated = css`
  opacity: 0.7;
`

export default OperationsButton;
