import React, { ReactElement } from "react";
import styled from "@emotion/styled";

export interface TagProps {
  margin?: string;
  isFriend: boolean;
}

export function Tag({ isFriend, margin }: TagProps): ReactElement {
  const tagColor = isFriend ? "#00C7B8" : "#4261e6";
  const tagText = isFriend ? "친구" : "기업";

  return (
    <TagStyle tagColor={tagColor} marginValue={margin}>
      {tagText}
    </TagStyle>
  );
}

Tag.defaultProps = {
  isFriend: false,
};

const TagStyle = styled.span<{
  tagColor: string;
  marginValue: string | undefined;
}>`
  display: inline-block;
  ${({ marginValue }) => marginValue && `margin: ${marginValue}`};
  padding: 2px 10px;
  font-size: 12px;
  border-radius: 15px;
  background-color: ${({ tagColor }) => tagColor};
  color: #fff;
  vertical-align: top;
`;
