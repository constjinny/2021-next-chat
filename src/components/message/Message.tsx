import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { Avatar } from "../avatar";

export interface MessageProps {}

export function Message({}: MessageProps): ReactElement {
  return (
    <MessageStyle>
      <div>
        <Avatar />
        <strong>이름</strong>
      </div>
      <div>
        <p>메세지</p>
        <span>일시, 읽음표시</span>
      </div>
    </MessageStyle>
  );
}

Message.defaultProps = {};

const MessageStyle = styled.div``;
