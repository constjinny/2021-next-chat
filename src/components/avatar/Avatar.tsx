import React, { ReactElement } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export interface AvatarProps {
  hideLine: boolean;
  isFriend: boolean;
  url?: { src: string; height: number; width: number; blurDataURL?: string };
}

export function Avatar({ hideLine, isFriend, url }: AvatarProps): ReactElement {
  const borderColor = hideLine ? "#e4e4e4" : isFriend ? "#00C7B8" : "#4261e6";
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
  background-color: #fff;
  box-sizing: border-box;
`;

const AvararEmpyStyle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #d9d9d9;
  svg {
    font-size: 24px;
    color: #fff;
  }
`;
