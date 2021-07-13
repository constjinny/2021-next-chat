import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import colors from "../../constant/color";

import { ButtonSizes, buttonSizesStyle } from "./types";

export interface IButtonProps {
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
}: IButtonProps): ReactElement {
  const getSizeStyle = buttonSizesStyle[size];

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
  background-color: ${colors.darkPurple};
  border-radius: 20px;
  color: ${colors.white};
  ${({ size }) => size};
`;
