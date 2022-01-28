import React from "react";
import styled, { css } from "styled-components";
import ButtonHOC from "../buttons/Button.hoc";
import { BUTTON_TYPE } from "../buttons/Button.hoc";

const Pad:React.FC = () => {

  const buttons: BUTTON_TYPE[] = [];
  for (let i = 0; i < 20; i++) buttons.push(i);

  return (
    <StyleWrapper>
      { buttons.map(button => <ButtonHOC key={button} button_type={button}/>) }
    </StyleWrapper>
  );
}

const styles = css`
  height: 75%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 7px;
  padding-top: 7px;
`

const StyleWrapper = styled.div`
  ${styles}
`

export default Pad;
