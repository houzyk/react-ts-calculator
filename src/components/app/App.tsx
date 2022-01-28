import React from 'react';
import styled, { css } from "styled-components";

// components
import Calculator from '../calculator/Calculator.component';

function App() {
  return (
    <StyleWrapper>
      <Calculator />
    </StyleWrapper>
  );
}

const styles = css`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #040F16;
`

const StyleWrapper = styled.div`
  ${styles}
`

export default App;
