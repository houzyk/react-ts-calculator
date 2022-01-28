import React, { useState } from 'react';
import styled, { css } from "styled-components";

// components
import Display from '../display/Display.component';
import Pad from '../pad/Pad.component';

import { operation_type } from '../buttons/operation-button/OperationsButton.component'
import { digit_type } from '../buttons/digit-button/DigitButton.component';
import { BUTTON_TYPE } from '../buttons/Button.hoc';

const Calculator:React.FC = () => {
  const [display, setDisplay] = useState<number[]>([]);

  const [storedNum, setstoredNum] = useState<number>();
  const [isOperation, setisOperation] = useState<boolean>(false);
  const [currentOperation, setcurrentOperation] = useState<operation_type>();



  const handleOperation = (operation: operation_type):void => {
    if (storedNum ) {
      switch (operation) {
        case BUTTON_TYPE.ADD:
            setDisplay([storedNum])
            setstoredNum(storedNum);
          break;

        case BUTTON_TYPE.MULTIPLY:
          setDisplay([storedNum])
          setstoredNum(storedNum);
          break;

        case BUTTON_TYPE.MINUS:
          setDisplay([storedNum])
          setstoredNum(storedNum);
          break;

        case BUTTON_TYPE.POWER:
          setDisplay([storedNum ])
          setstoredNum(storedNum );
          break;

        case BUTTON_TYPE.DIVIDE:
          setDisplay([storedNum])
          setstoredNum(storedNum);
          break;

        default:
          return;
      }
    }
  }

  const handleInput = (digit: digit_type) => {
    switch (digit) {
      case BUTTON_TYPE.ONE:
        setDisplay([...display, 1])
        break;

      default:
        break;
    }
  }

  return (
    <StyleWrapper>
      <Display display={display}/>
      <Pad input_handler={handleInput}/>
    </StyleWrapper>
  );
}

const styles = css`
  height: 70%;
  width: 27%;
  background-color: #D36135;
  border-radius: 7px;
  padding: 7px;
`

const StyleWrapper = styled.div`
  ${styles}
`

export default Calculator;
