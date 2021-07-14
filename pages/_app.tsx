import type { AppProps } from "next/app";
import { AppContext } from "next/app";

import styled from "@emotion/styled";
import "../styles/globals.css";

import { wrapper } from "@store/index";

function App({ Component, pageProps }: AppProps) {
  async ({ Component, ctx }: AppContext) => {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
      },
      appProp: ctx.pathname,
    };
  };

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
