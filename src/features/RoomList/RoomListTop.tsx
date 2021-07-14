import {
  ReactElement,
  Fragment,
  useEffect,
  useCallback,
  useState,
} from "react";
import * as Redux from "react-redux";
import styled from "@emotion/styled";
import colors from "@constants/colors";
import { chatAPI, friendAPI } from "@api/api.sample";
import dummyData from "@data/data.sample";
import { IFriend } from "@types/roomList";

import { roomListParser, friendDataParser, roomDataParser } from "./RoomParser";
import { roomAction, roomSelector } from "./RoomSlice";

import { SearchInput } from "@components/input";
import { Button, ButtonSizes } from "@components/button";
import { NoData } from "@components/noData";

export function RoomListTop(): ReactElement {
  const dispatch = Redux.useDispatch();
  const unReadRoom = Redux.useSelector(roomSelector.selectUnReadRoom);
  const friendList = Redux.useSelector(roomSelector.selectFriendList);
  const [searchValue, setSearchValue] = useState("");
  const [showFriendList, setShowFriendList] = useState(false);

  // NOTI: 대화 검색시 조회
  const getSearchChatData = useCallback(
    async (searchValue: string) => {
      const chatDataAPI = await chatAPI.getChatData(searchValue);
      if (chatDataAPI) {
        const pasedChatData = roomListParser(
          dummyData.authUser.id,
          chatDataAPI
        );

        const dispatchData = searchValue
          ? { chat: pasedChatData, onSearch: true }
          : { chat: pasedChatData, onSearch: false };

        dispatch(roomAction.setRoomListData(dispatchData));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    getSearchChatData(searchValue);
  }, [searchValue, getSearchChatData]);

  const getRoomListData = useCallback(async () => {
    const chatDataAPI = await chatAPI.getChatData();
    const friendDataAPI = await friendAPI.getFriendData();
    if (chatDataAPI && friendDataAPI) {
      const pasedChatData = roomListParser(dummyData.authUser.id, chatDataAPI);
      const pasedFriendData = friendDataParser(friendDataAPI, chatDataAPI);

      dispatch(
        roomAction.setRoomListData({
          chat: pasedChatData,
          friend: pasedFriendData,
        })
      );
    }
  }, [dispatch]);

  // NOTI: 대화방 생성
  const handleCreateRoom = (friendId: string) => {
    const newRoomId = chatAPI.addNewRoom(friendId);
    if (newRoomId) {
      const roomDataAPI = chatAPI.getRoomData(newRoomId);
      getRoomListData();

      if (roomDataAPI) {
        const pasedRoomData = roomDataParser(
          dummyData.authUser.id,
          roomDataAPI
        );

        dispatch(roomAction.setCurrentRoomData({ room: pasedRoomData }));
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
          value={searchValue}
          placeholder="대화 검색하기"
          onChange={setSearchValue}
        />
      </SearchWrapStyle>
    </Fragment>
  );
}

const TopWrapStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 20px;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.lightGray};
`;

const CreateSelecteGroup = styled.div`
  position: relative;
  width: 113px;
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
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 20px;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.lightGray};
`;
