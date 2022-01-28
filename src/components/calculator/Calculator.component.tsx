import React, { useState, useEffect } from 'react';
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
  const [operation, setOperation] = useState<[operation_type?]>([]);

  useEffect(() => {
    setstoredNum(+display.join(''));
  }, [display]);

  useEffect(() => {
    console.log(operation)
  }, [operation]);
  
  const handleOperation = (op: operation_type):void => {
    if (storedNum) {
      switch (op) {
        case BUTTON_TYPE.ADD:
          operation.length === 0 ? setOperation([BUTTON_TYPE.ADD]) : setOperation([])
          break;

        case BUTTON_TYPE.MULTIPLY:
          operation.length === 0 ? setOperation([BUTTON_TYPE.MULTIPLY]) : setOperation([])
          break;

        case BUTTON_TYPE.MINUS:
          operation.length === 0 ? setOperation([BUTTON_TYPE.MINUS]) : setOperation([])
          break;

        case BUTTON_TYPE.POWER:
          operation.length === 0 ? setOperation([BUTTON_TYPE.POWER]) : setOperation([])
          break;

        case BUTTON_TYPE.DIVIDE:
          operation.length === 0 ? setOperation([BUTTON_TYPE.DIVIDE]) : setOperation([])
          break;

        default:
          return;
      }
    }
  }

  const handleDigitInput = (digit: digit_type):void => {
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
    if (!display.includes(".") && display.length > 0) setDisplay([...display, "."]);
  }

  const handleSignChange = (cmd: BUTTON_TYPE.SIGN):void => {
    const invertedNumber = +display.join('') * -1;
    setDisplay([...invertedNumber.toString().split('')]);
  }

  const handleEqual = (cmd: BUTTON_TYPE.EQUAL):void => {
    storedNum ? setDisplay(storedNum.toString().split('')) : setDisplay([]);
  }

  return (
    <StyleWrapper>
      <Display display={display}/>
      <Pad
        input_handler={handleDigitInput}
        clearAll_handler={handleClearAll}
        clear_handler={handleClear}
        dot_handler={handleDot}
        sign_change_handler = {handleSignChange}
        equal_handler = {handleEqual}
        operation_handler = {handleOperation}
        is_operation = {operation}
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
