import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { ButtonSizes, ButtonSizesStyle } from "./types";

export interface ButtonProps {
  children?: any;
  size: ButtonSizes | string;
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
  size: ButtonSizes.H30,
  isDisabled: false,
};

const ButtonStyle = styled.button<{ size: any }>`
  display: block;
  background-color: #4261e6;
  border-radius: 20px;
  color: #fff;
  ${({ size }) => size};
`;
