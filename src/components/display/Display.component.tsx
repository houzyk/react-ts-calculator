import React from "react";
import styled, { css } from "styled-components";

const Display:React.FC<{display: (number | string)[]}> = ({ display }) => {
  return (
    <StyleWrapper>
      <div className="display">
        {display.join('')}
      </div>
    </StyleWrapper>
  );
}

const styles = css`
  height: 25%;
  width: 100%;
  border-radius: 7px;
  background-color: #040F16;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .display {
    color: white;
    text-align: right;
    font-size: 5rem;
    padding: 7px;
    overflow: hidden;
  }
`

const StyleWrapper = styled.div`
  ${styles}
`

export default Display;
