import React from "react";
import styled, { css } from "styled-components";

export enum BUTTON_TYPE {
    EQUAL,
    ClEAR,
    DELETE,
    DOT,
    SIGN,
    ADD,
    MINUS,
    DIVIDE,
    MULTIPLY,
    POWER,
    ONE,
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    ZERO
  }

interface ButtonHocProps {
  button_type: BUTTON_TYPE;
}

const ButtonHOC: React.FC<ButtonHocProps> = ({ button_type }) => {

  switch (button_type) {

    // display controls
    case BUTTON_TYPE.ClEAR:
      return (
        <StyleWrapper>
        </StyleWrapper>
      );

    case BUTTON_TYPE.DELETE:
      return (
        <StyleWrapper>
        </StyleWrapper>
      );

    // operations
    case BUTTON_TYPE.DIVIDE:
      return (
        <StyleWrapper>
        </StyleWrapper>
      );

    case BUTTON_TYPE.MULTIPLY:
      return (
        <StyleWrapper>
        </StyleWrapper>
      );

    case BUTTON_TYPE.ADD:
      return (
        <StyleWrapper>
        </StyleWrapper>
      );

    case BUTTON_TYPE.MINUS:
      return (
        <StyleWrapper>
        </StyleWrapper>
      );

    case BUTTON_TYPE.POWER:
      return (
        <StyleWrapper>
        </StyleWrapper>
      );

    // symbols
    case BUTTON_TYPE.SIGN:
      return (
        <StyleWrapper>
        </StyleWrapper>
      );

    case BUTTON_TYPE.EQUAL:
      return (
        <StyleWrapper>
        </StyleWrapper>
      );

    case BUTTON_TYPE.DOT:
      return (
        <StyleWrapper>
        </StyleWrapper>
      );

    // numbers
    case BUTTON_TYPE.ZERO:
      return (
        <StyleWrapper>
        </StyleWrapper>
      );

    case BUTTON_TYPE.ONE:
      return (
        <StyleWrapper>
        </StyleWrapper>
      );

    case BUTTON_TYPE.TWO:
      return (
        <StyleWrapper>
        </StyleWrapper>
      );

    case BUTTON_TYPE.THREE:
      return (
        <StyleWrapper>
        </StyleWrapper>
      );

    case BUTTON_TYPE.FOUR:
      return (
        <StyleWrapper>
        </StyleWrapper>
      );

    case BUTTON_TYPE.FIVE:
      return (
        <StyleWrapper>
        </StyleWrapper>
      );

    case BUTTON_TYPE.SIX:
      return (
        <StyleWrapper>
        </StyleWrapper>
      );

    case BUTTON_TYPE.SEVEN:
      return (
        <StyleWrapper>
        </StyleWrapper>
      );

    case BUTTON_TYPE.EIGHT:
      return (
        <StyleWrapper>
        </StyleWrapper>
      );

    case BUTTON_TYPE.NINE:
      return (
        <StyleWrapper>
        </StyleWrapper>
      );

    default:
      return null;
  }
}

const styles = css`
  background-color: black;
  border-radius: 50%;
  cursor: pointer;
`

const StyleWrapper = styled.div`
  ${styles}
`

export default ButtonHOC;
