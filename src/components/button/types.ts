import { css } from "@emotion/react";

export enum ButtonSizes {
  FUll = "FULL",
  BIG = "BIG",
  SMALL = "SMALL",
}

export const ButtonSizesStyle: { [index: string]: any } = {
  [ButtonSizes.FUll]: css`
    width: 100%;
    height: 100%;
  `,
  [ButtonSizes.BIG]: css`
    padding: 0 14px;
    line-height: 38px;
  `,
  [ButtonSizes.SMALL]: css`
    padding: 0 20px;
    line-height: 30px;
  `,
};
