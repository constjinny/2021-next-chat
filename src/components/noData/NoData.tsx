import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import colors from "@constants/colors";

export interface INoDataProps {
  calc?: string;
  desc?: string;
}

export function NoData({ calc, desc }: INoDataProps): ReactElement {
  const heightValue = calc ? `calc(100% - ${calc})` : "100%";

  return (
    <NoDataStyle heightValue={heightValue}>
      <p>{desc}</p>
    </NoDataStyle>
  );
}

NoData.defaultProps = {
  desc: "데이터가 없습니다.",
};

const NoDataStyle = styled.div<{ heightValue: string }>`
  display: flex;
  width: 100%;
  height: ${({ heightValue }) => heightValue};
  justify-content: center;
  align-items: center;
  p {
    color: ${colors.gray};
  }
`;
