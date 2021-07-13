import {
  ReactElement,
  Fragment,
  useEffect,
  useCallback,
  useState,
} from "react";
import * as Redux from "react-redux";
import styled from "@emotion/styled";
import { chatAPI } from "../../api/api.sample";
import dummyData from "../../data/data.sample";

import { roomListParser } from "./RoomListParser";
import { roomListAction, roomListSelector } from "./RoomListSlice";
import { Button, ButtonSizes } from "../../components/button";
import { SearchInput } from "../../components/input";

export function RoomListTop(): ReactElement {
  const dispatch = Redux.useDispatch();
  const unReadRoom = Redux.useSelector(roomListSelector.selectUnReadRoom);
  const [searchValue, setSearchValue] = useState("");

  // NOTI: 대화 검색
  const getSearchChatData = useCallback(
    async (searchValue: string) => {
      const data = await chatAPI.getChatData(searchValue);
      const pasedData = roomListParser(dummyData.authUser.id, data);

      const dispatchData = searchValue
        ? { data: pasedData, onSearch: true }
        : { data: pasedData, onSearch: false };

      dispatch(roomListAction.setRoomListData(dispatchData));
    },
    [dispatch]
  );

  useEffect(() => {
    getSearchChatData(searchValue);
  }, [searchValue, getSearchChatData]);

  return (
    <Fragment>
      <TopWrapStyle>
        <span>안읽은 대화({unReadRoom})</span>

        <Button size={"BIG"} onClick={() => {}}>
          + 새로운 메세지
        </Button>
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
  background-color: #fff;
  border-bottom: 1px solid #aaa;
`;

const SearchWrapStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 20px;
  background-color: #fff;
  border-bottom: 1px solid #aaa;
`;
