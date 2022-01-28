import React from "react";
import styled, { css } from "styled-components";

const Pad:React.FC = () => {
  return (
    <StyleWrapper>
    </StyleWrapper>
  );
}

const styles = css`
  height: 75%;
  width: 100%;
  background-color: aqua;
`

const StyleWrapper = styled.div`
  ${styles}
`

export default Pad;
