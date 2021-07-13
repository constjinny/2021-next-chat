import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import colors from "../../constant/color";

export interface ITagProps {
  margin?: string;
  isFriend: boolean;
}

export function Tag({ isFriend, margin }: ITagProps): ReactElement {
  const tagColor = isFriend ? colors.mint : colors.darkPurple;
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
  color: ${colors.white};
  vertical-align: top;
`;
