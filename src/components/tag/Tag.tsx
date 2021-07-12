import React, { ReactElement } from "react";
import styled from "@emotion/styled";

export interface TagProps {
  isFriend: boolean;
}

export function Tag({ isFriend }: TagProps): ReactElement {
  const tagColor = isFriend ? "red" : "#aaa";
  const tagText = isFriend ? "친구" : "기업";

  return <TagStyle tagColor={tagColor}>{tagText}</TagStyle>;
}

Tag.defaultProps = {
  isFriend: false,
};

const TagStyle = styled.span<{ tagColor: string }>`
  display: inline-block;
  border-radius: 50%;
  background-color: ${({ tagColor }) => tagColor};
  vertical-align: top;
`;
