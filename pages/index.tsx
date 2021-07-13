import { useEffect } from "react";
import styled from "@emotion/styled";
import { commAPI } from "../api/api.sample";

import { RoomListPage } from "../src/feature/RoomList";
import { RoomPage } from "../src/feature/room";

export default function ChatApp() {
  useEffect(() => {
    // 서비스 최초 접속시 데이터 로드
    commAPI.getLoadData();
  }, []);

  return (
    <ChatAppLayout>
      <LeftLayout>
        <RoomListPage />
      </LeftLayout>
      <RightLayout>
        <RoomPage />
      </RightLayout>
    </ChatAppLayout>
  );
}

const ChatAppLayout = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftLayout = styled.div`
  flex: 1.5;
  background-color: plum;
`;

const RightLayout = styled.div`
  flex: 2;
  background-color: pink;
`;
