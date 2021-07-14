import React, { ReactElement } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import colors from "@constants/colors";

export interface IAvatarProps {
  hideLine: boolean;
  isFriend: boolean;
  url?: { src: string; height: number; width: number; blurDataURL?: string };
}

export function Avatar({
  hideLine,
  isFriend,
  url,
}: IAvatarProps): ReactElement {
  const borderColor = hideLine
    ? colors.lightPurple
    : isFriend
    ? colors.mint
    : colors.darkPurple;
  const userIcon = <FontAwesomeIcon icon={faUser} />;

  return (
    <AvatarStyle borderColor={borderColor}>
      {url ? (
        <Image src={url} alt="대화 상대 사진" />
      ) : (
        <AvararEmpyStyle>{userIcon}</AvararEmpyStyle>
      )}
    </AvatarStyle>
  );
}

Avatar.defaultProps = {
  hideLine: false,
  isFriend: false,
};

const AvatarStyle = styled.div<{ borderColor: string }>`
  overflow: hidden;
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid ${({ borderColor }) => borderColor};
  background-color: ${colors.white};
  box-sizing: border-box;
`;

const AvararEmpyStyle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${colors.lightGray};
  svg {
    font-size: 24px;
    color: ${colors.white};
  }
`;
