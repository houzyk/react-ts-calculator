import React from "react";
import styled, { css } from "styled-components";

const Display:React.FC = () => {
  return (
    <StyleWrapper>
    </StyleWrapper>
  );
}

const styles = css`
  height: 25%;
  width: 100%;
  border-radius: 7px;
  background-color: #040F16;
`

const StyleWrapper = styled.div`
  ${styles}
`

export default Display;
