import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";

import "root/index.css";
import { ModalProvider } from "root/routes/modals/modal-provider";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <ModalProvider />
    <Component {...pageProps} />
  </>
);

export default appWithTranslation(App);
