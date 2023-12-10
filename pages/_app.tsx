import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default appWithTranslation(App);
