import React from 'react';
import styled, { css } from "styled-components";

// components
import Display from '../display/Display.component';

const Calculator:React.FC = () => {
  return (
    <StyleWrapper>
      <Display />
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
