import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";

import "root/index.css";

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default appWithTranslation(App);
