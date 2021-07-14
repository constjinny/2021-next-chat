import { Fragment, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import styled from "@emotion/styled";

import { Input } from "@components/input";
import { Button, ButtonSizes } from "@components/button";

export default function ChatApp() {
  const { push } = useRouter();
  const [idValue, setIdValue] = useState<any>("");
  const [pwValue, setPwValue] = useState<any>("");
  const onLoginButton = idValue !== "" && pwValue !== "";

  const handleSubmitLogin = () => {
    axios
      .post("/api/login")
      .then((res) => {
        if (res.status === 200 && res.data.result) {
          push("/");
        } else {
          push("/login");
        }
      })
      .catch((err) => console.log("err", err));
  };

  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <title>login | next-chat</title>
        <meta name="description" content="next-chat" />
        <meta name="keywords" content="ssr, next, react, chat" />
        <meta name="author" content="constjinny" />
        <meta property="og:title" name="og:title" content="login | next-chat" />
        <meta
          property="og:description"
          name="og:description"
          content="next-chat"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <h1>앱 로그인</h1>

      <LoginLayout>
        <div>
          <p>
            임시용 입니다. <br />
            임의의 id, pw 입력해주세요.
          </p>

          <Input
            id={"inoutId"}
            value={idValue}
            placeholder="id"
            onChange={setIdValue}
          />
          <Input
            id={"inoutPw"}
            type="password"
            value={pwValue}
            placeholder="password"
            onChange={setPwValue}
          />

          <Button
            size={ButtonSizes.FULL}
            isDisabled={!onLoginButton}
            onClick={handleSubmitLogin}
          >
            login
          </Button>
        </div>
      </LoginLayout>
    </Fragment>
  );
}

const LoginLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  > div {
    width: 200px;
    text-align: center;
    > * + * {
      margin-top: 10px;
    }
  }
`;
