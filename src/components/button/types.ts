import { css } from "@emotion/react";

export enum ButtonSizes {
  H38 = "height38",
  H30 = "height30",
  FULL = "FULL",
}

export const buttonSizesStyle: { [index: string]: any } = {
  [ButtonSizes.H38]: css`
    padding: 0 14px;
    line-height: 38px;
  `,
  [ButtonSizes.H30]: css`
    padding: 0 20px;
    line-height: 30px;
  `,
  [ButtonSizes.FULL]: css`
    display: block;
    width: 100%;
    line-height: 38px;
  `,
};
