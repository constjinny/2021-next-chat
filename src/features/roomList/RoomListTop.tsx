import { ReactElement, Fragment, useState } from "react";
import * as Redux from "react-redux";
import styled from "@emotion/styled";
import colors from "@constants/colors";
import { chatAPI } from "@api/api.sample";
import { IFriend } from "@type/roomList";
import dummyData from "@data/data.sample"; // TODO: 제거

import { roomAction, roomSelector } from "./RoomSlice";
import { roomDataParser } from "./RoomParser";

import { NoData } from "@components/noData";
import { SearchInput } from "@components/input";
import { Button, ButtonSizes } from "@components/button";

export function RoomListTop(): ReactElement {
  const dispatch = Redux.useDispatch();
  const unReadRoom = Redux.useSelector(roomSelector.selectUnReadRoom);
  const friendList = Redux.useSelector(roomSelector.selectFriendList);
  const searchText = Redux.useSelector(roomSelector.selectSearchText);
  const [showFriendList, setShowFriendList] = useState(false);

  // NOTI: 대화 검색
  const updateSearchText = (text: string) => {
    dispatch(roomAction.updateSearchText({ text }));
  };

  // NOTI: 대화방 생성
  const handleCreateRoom = async (friendId: string) => {
    const newRoomId = chatAPI.addNewRoom(friendId);
    if (newRoomId) {
      const roomDataAPI = await chatAPI.updateRoomVisitTime(newRoomId);
      if (roomDataAPI) {
        const pasedRoomData = roomDataParser(
          dummyData.authUser.id,
          roomDataAPI
        );

        dispatch(
          roomAction.updateCurrentRoomData({
            room: pasedRoomData,
          })
        );
      }
    }
    setShowFriendList(false);
  };

  const friendSelectList =
    friendList.length > 0 ? (
      <Fragment>
        {friendList.map((friend: IFriend) => {
          return (
            <button
              type="button"
              key={friend.id}
              disabled={friend.hasRoom}
              onClick={() => handleCreateRoom(friend.id)}
            >
              {friend.nickName}
            </button>
          );
        })}
      </Fragment>
    ) : (
      <NoData desc={"친구목록이 없습니다."} />
    );

  return (
    <Fragment>
      <TopWrapStyle>
        <span>안읽은 대화({unReadRoom})</span>

        <CreateSelecteGroup>
          <Button
            size={ButtonSizes.H38}
            onClick={() => setShowFriendList(!showFriendList)}
          >
            + 새로운 메세지
          </Button>
          {showFriendList && <div>{friendSelectList}</div>}
        </CreateSelecteGroup>
      </TopWrapStyle>

      <SearchWrapStyle>
        <SearchInput
          value={searchText}
          placeholder="대화 검색하기"
          onChange={updateSearchText}
        />
      </SearchWrapStyle>
    </Fragment>
  );
}

const TopWrapStyle = styled.div`
  display: flex;
  flex: 0 0 100px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.lightGray};
`;

const CreateSelecteGroup = styled.div`
  position: relative;
  width: 113px;
  height: 38px;
  &:after {
    display: block;
    clear: both;
    content: "";
  }
  > button {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
  }
  > div {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    padding: 50px 0 15px;
    border-radius: 18px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
    background: ${colors.white};
    box-sizing: border-box;
    > button {
      display: block;
      width: 100%;
      padding: 10px 0;
      text-align: center;
      cursor: default;
      &:hover:enabled {
        cursor: pointer;
        background: ${colors.lightPurple};
      }
    }
  }
`;

const SearchWrapStyle = styled.div`
  display: flex;
  flex: 0 0 70px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.lightGray};
`;
