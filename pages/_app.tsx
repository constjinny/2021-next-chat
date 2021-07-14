import type { AppProps } from "next/app";

import styled from "@emotion/styled";
import "../styles/globals.css";

import { wrapper } from "@store/index";

function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default wrapper.withRedux(App);

const AppLayout = styled.div`
  min-width: 900px;
  height: 100vh;
`;
