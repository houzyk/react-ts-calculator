import React from "react";
import styled, { css } from "styled-components";
import ButtonHOC from "../buttons/Button.hoc";
import { BUTTON_TYPE } from "../buttons/Button.hoc";
import { digit_type } from "../buttons/digit-button/DigitButton.component"
import { operation_type } from "../buttons/operation-button/OperationsButton.component";

export interface PadProps {
  input_handler: (digit: digit_type) => void;
  clearAll_handler: (cmd: BUTTON_TYPE.ClEAR) => void;
  clear_handler: (cmd: BUTTON_TYPE.DELETE) => void;
  dot_handler: (cmd: BUTTON_TYPE.DOT) => void;
  sign_change_handler: (cmd: BUTTON_TYPE.SIGN) => void;
  equal_handler: (cmd: BUTTON_TYPE.EQUAL) => void;
  operation_handler: (cmd: operation_type) => void;
  is_operation: [operation_type?]
}

const Pad:React.FC<PadProps> = ({ input_handler, clearAll_handler, clear_handler, dot_handler, sign_change_handler, equal_handler, operation_handler, is_operation}) => {

  const buttons: BUTTON_TYPE[] = [];
  for (let i:BUTTON_TYPE = 0; i < 20; i++) buttons.push(i);

  return (
    <StyleWrapper>
      { buttons.map(button =>
        <ButtonHOC
          key={button}
          button_type={button}
          input_handler={input_handler}
          clearAll_handler={clearAll_handler}
          clear_handler={clear_handler}
          dot_handler={dot_handler}
          sign_change_handler={sign_change_handler}
          equal_handler={equal_handler}
          operation_handler={operation_handler}
          is_operation={is_operation}
        />
        )
      }
    </StyleWrapper>
  );
}

const styles = css`
  height: 75%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 7px;
  padding-top: 7px;
`

const StyleWrapper = styled.div`
  ${styles}
`

export default Pad;
