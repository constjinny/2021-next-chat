import { useEffect } from "react";
import styled from "@emotion/styled";
import { commAPI } from "../src/api/api.sample";

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
  height: 100%;
`;

const LeftLayout = styled.div`
  overflow: hidden;
  flex: 1;
`;

const RightLayout = styled.div`
  overflow: hidden;
  flex: 1.5;
  background-color: pink;
`;
