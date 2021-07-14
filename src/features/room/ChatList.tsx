import { ReactElement, Fragment, useState, useEffect, useRef } from "react";
import * as Redux from "react-redux";
import styled from "@emotion/styled";
import colors from "@constants/colors";
import { IRoomChatItem } from "@types/room";

import { roomSelector } from "@features/RoomList";
import { Avatar } from "@components/avatar";

export function ChatList(): ReactElement {
  const scrollTargetRef = useRef() as React.MutableRefObject<HTMLLIElement>;
  const chatData = Redux.useSelector(roomSelector.selectCurrentChatData);

  useEffect(() => {
    const { current } = scrollTargetRef;
    if (current) {
      setTimeout(() => current.scrollIntoView({ behavior: "smooth" }), 0);
    }
  });

  return (
    <Fragment>
      <ChatListStyle>
        {chatData.map((chat: IRoomChatItem, index: number) => {
          const {
            user,
            isAuth,
            isFriend,
            isDateGroup,
            isMinuteGroup,
            time,
            timeToString,
            dateToString,
            unReadLength,
            data,
          } = chat;
          const { nickName, avatarUrl } = user;

          const checkEnterInData = data.replace(/\n/g, "<br/>");

          return (
            <li key={time}>
              {index !== 0 && !isDateGroup && (
                <DateLineStyle>
                  <span>{dateToString}</span>
                </DateLineStyle>
              )}

              <ChatInfoStyle>
                <Avatar hideLine={isAuth} isFriend={isFriend} url={avatarUrl} />
                <strong>{nickName}</strong>
              </ChatInfoStyle>

              <ChatDataStyle
                dangerouslySetInnerHTML={{ __html: checkEnterInData }}
              />

              <TimeDataStyle>
                {!isMinuteGroup && (
                  <Fragment>
                    <span>- {timeToString}</span>

                    {unReadLength > 0 && (
                      <UnReadDataStyle>{unReadLength}</UnReadDataStyle>
                    )}
                  </Fragment>
                )}
              </TimeDataStyle>
            </li>
          );
        })}
        <li ref={scrollTargetRef} />
      </ChatListStyle>
    </Fragment>
  );
}

const ChatListStyle = styled.ol`
  overflow: scroll;
  width: 100%;
  margin-bottom: 20px;
  padding-top: 20px;
  box-sizing: border-box;
  > li + li {
    margin-top: 20px;
  }
`;

const ChatDataStyle = styled.p`
  margin-left: 60px;
  line-height: 1.5;
`;

const TimeDataStyle = styled.div`
  margin: 10px 0 0 60px;
  font-size: 12px;
  span {
    color: ${colors.lightGray};
  }
`;

const UnReadDataStyle = styled.span`
  margin-left: 5px;
  color: ${colors.darkPurple} !important;
`;

const ChatInfoStyle = styled.div`
  display: flex;
  align-items: center;
  > strong {
    margin-left: 10px;
    font-size: 18px;
  }
`;

const DateLineStyle = styled.span`
  overflow: hidden;
  display: block;
  position: relative;
  height: 15px;
  margin: 10px 0;
  text-align: center;
  > span {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 0 15px;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    background-color: ${colors.white};
    color: ${colors.black};
  }
  &:before {
    display: inline-block;
    position: absolute;
    top: 7px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${colors.lightGray};
    content: "";
  }
`;
