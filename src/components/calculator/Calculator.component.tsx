import React, { useState } from 'react';
import styled, { css } from "styled-components";

// components
import Display from '../display/Display.component';
import Pad from '../pad/Pad.component';

import { operation_type } from '../buttons/operation-button/OperationsButton.component'

const Calculator:React.FC = () => {
  const [display, setDisplay] = useState<string>('');
  const [storedNum, setstoredNum] = useState<number>();
  const [storedToCalcNum, setstoredToCalcNum] = useState<number>();
  const [isOperation, setisOperation] = useState<boolean>(false);
  const [currentOperation, setcurrentOperation] = useState<operation_type>();

  return (
    <StyleWrapper>
      <Display display={display}/>
      <Pad />
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
