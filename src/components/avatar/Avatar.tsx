import React, { ReactElement } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export interface AvatarProps {
  isFriend: boolean;
  url?: string;
}

export function Avatar({ isFriend, url }: AvatarProps): ReactElement {
  const borderColor = isFriend ? "red" : "#aaa";
  const userIcon = <FontAwesomeIcon icon={faUser} />;

  return (
    <AvatarStyle borderColor={borderColor}>
      {url ? '<Image src={"url"} alt="" />' : userIcon}
    </AvatarStyle>
  );
}

Avatar.defaultProps = {
  isFriend: false,
};

const AvatarStyle = styled.div<{ borderColor: string }>`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid ${({ borderColor }) => borderColor};
`;
