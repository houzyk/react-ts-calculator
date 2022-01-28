import React from 'react';
import styled, { css } from "styled-components";

const Calculator:React.FC = () => {
  return (
    <StyleWrapper>
    </StyleWrapper>
  );
}

const styles = css`
  height: 70%;
  width: 27%;
  background-color: #D36135;
  border-radius: 15px;
`

const StyleWrapper = styled.div`
  ${styles}
`

export default Calculator;
