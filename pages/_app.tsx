import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { session } from "root/entities";

import "root/processes/notification";

import "root/index.css";
import { ModalProvider } from "root/routes/modals/modal-provider";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    session.model.events.onAppLoaded();
  }, []);

  return (
    <>
      <ModalProvider />
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(App);
