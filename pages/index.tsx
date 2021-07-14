import { Fragment, useEffect, useCallback, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import styled from "@emotion/styled";
import { commAPI } from "@api/api.sample";

import { RoomListPage } from "@features/roomList";
import { RoomPage } from "@features/room";
import { Button } from "@components/button";

export default function ChatApp() {
  const { push } = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  const checkLogin = useCallback(() => {
    axios
      .get("/api/isLogin")
      .then((res) => {
        if (res.status === 200 && res.data.id) {
          setIsLogin(true);
          push("/");
        } else {
          setIsLogin(false);
          push("/login");
        }
      })
      .catch((err) => console.log("err", err));
  }, [push]);

  const handleLogout = useCallback(() => {
    axios
      .get("/api/logout")
      .then((res) => {
        if (res.status === 200 && res.data.result) {
          setIsLogin(false);
          push("/login");
          // TODO: 로그아웃시 session, reducer 데이터 초기화
        } else {
          setIsLogin(true);
          push("/");
        }
      })
      .catch((err) => console.log("err", err));
  }, [push]);

  useEffect(() => {
    // NOTI: 서비스 최초 접속시 데이터 로드 (API 대안)
    commAPI.getLoadData();
  }, []);

  useEffect(() => {
    if (isLogin) {
    } else {
      checkLogin();
    }
  }, [isLogin, checkLogin]);

  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <title>home | next-chat</title>
        <meta name="description" content="next-chat" />
        <meta name="keywords" content="ssr, next, react, chat" />
        <meta name="author" content="constjinny" />
        <meta property="og:title" name="og:title" content="home | next-chat" />
        <meta
          property="og:description"
          name="og:description"
          content="next-chat"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <h1>앱 홈</h1>

      {isLogin && (
        <ChatAppLayout>
          <h2>대화 목록</h2>
          <LeftLayout>
            <RoomListPage />
          </LeftLayout>

          <h2>대화 내용</h2>
          <RightLayout>
            <RoomPage />
          </RightLayout>

          <LogoutButtonStyle>
            <Button onClick={handleLogout}>logout</Button>
          </LogoutButtonStyle>
        </ChatAppLayout>
      )}
    </Fragment>
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
`;

const LogoutButtonStyle = styled.span`
  position: fixed;
  top: 10px;
  right: 10px;
`;
