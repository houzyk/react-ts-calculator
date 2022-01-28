import React, { useState } from 'react';
import styled, { css } from "styled-components";

// components
import Display from '../display/Display.component';
import Pad from '../pad/Pad.component';

import { operation_type } from '../buttons/operation-button/OperationsButton.component'
import { digit_type } from '../buttons/digit-button/DigitButton.component';
import { BUTTON_TYPE } from '../buttons/Button.hoc';

const Calculator:React.FC = () => {
  const [display, setDisplay] = useState<(number | string)[]>([]);

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

  const handleDigitInput = (digit: digit_type) => {
    switch (digit) {
      case BUTTON_TYPE.ZERO:
        setDisplay([...display, 0])
        break;

      case BUTTON_TYPE.ONE:
        setDisplay([...display, 1])
        break;

      case BUTTON_TYPE.TWO:
        setDisplay([...display, 2])
        break;

      case BUTTON_TYPE.THREE:
        setDisplay([...display, 3])
        break;

      case BUTTON_TYPE.FOUR:
        setDisplay([...display, 4])
        break;

      case BUTTON_TYPE.FIVE:
        setDisplay([...display, 5])
        break;

      case BUTTON_TYPE.SIX:
        setDisplay([...display, 6])
        break;

      case BUTTON_TYPE.SEVEN:
        setDisplay([...display, 7])
        break;

      case BUTTON_TYPE.EIGHT:
        setDisplay([...display, 8])
        break;
      case BUTTON_TYPE.NINE:
        setDisplay([...display, 9])
        break;

      default:
        break;
    }
  }

  const handleClearAll = (cmd: BUTTON_TYPE.ClEAR):void => setDisplay([]);

  const handleClear = (cmd: BUTTON_TYPE.DELETE): void => {
    if (display.length > 0) {
      display.pop();
      setDisplay([...display]);
    }
  }

  const handleDot = (cmd: BUTTON_TYPE.DOT):void => {
    if (!display.includes(".") && !(display.length === 0)) setDisplay([...display, "."]);
  }

  return (
    <StyleWrapper>
      <Display display={display}/>
      <Pad
        input_handler={handleDigitInput}
        clearAll_handler={handleClearAll}
        clear_handler={handleClear}
        dot_handler={handleDot}
      />
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
