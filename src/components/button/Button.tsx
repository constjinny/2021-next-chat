import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { ButtonSizes, ButtonSizesStyle } from "./types";

export interface ButtonProps {
  children?: any;
  size: ButtonSizes;
  onClick: (any: any) => any;
  isDisabled: boolean;
}

export function Button({
  children,
  size,
  onClick,
  isDisabled,
}: ButtonProps): ReactElement {
  const getSizeStyle = ButtonSizesStyle[size];

  return (
    <ButtonStyle
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      size={getSizeStyle}
    >
      {children && children}
    </ButtonStyle>
  );
}

Button.defaultProps = {
  size: ButtonSizes.FUll,
  isDisabled: false,
};

const ButtonStyle = styled.button<{ size: any }>`
  display: block;
  ${({ size }) => size};
`;
