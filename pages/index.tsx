import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styled from "@emotion/styled";
import axios from "axios";
import { RoomList } from "../src/feature/RoomList";
import { ChatRoom } from "../src/feature/chatRoom";
import { NoData } from "../src/components/noData";

export default function ChatApp() {
  const data = false;

  useEffect(() => {
    const data = axios.get("/api/getLoadData");
    console.log("data", data);
  }, []);

  return (
    <ChatAppLayout>
      <LeftLayout>
        <RoomList />
      </LeftLayout>
      <RightLayout>
        {data ? <ChatRoom /> : <NoData desc="선택한 대화가 없습니다." />}
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
