import React, { ReactElement } from "react";
import styled from "@emotion/styled";

export interface NoDataProps {
  desc?: string;
}

export function NoData({ desc }: NoDataProps): ReactElement {
  return (
    <NoDataStyle>
      <p>{desc}</p>
    </NoDataStyle>
  );
}

NoData.defaultProps = {
  desc: "데이터가 없습니다.",
};

const NoDataStyle = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
