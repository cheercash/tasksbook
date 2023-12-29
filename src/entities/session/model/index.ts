import { createEffect, createEvent, createStore, sample } from "effector";
import { authorizeOnLoadReq } from "../api";
import { Theme } from "root/shared/api/type";
import { StaticImageData } from "next/image";

const authorizeOnLoadFx = createEffect(authorizeOnLoadReq);

const $isAuthorizing = authorizeOnLoadFx.pending;

const $isUserFetchedOnLoad = createStore(false);

type User = {
  id: number;
  theme: Theme;
  login: string;
  email: string;
  firstName: string;
  lastName: string;
  // TODO: remove StaticImageData
  avatarUrl: string | null | StaticImageData;
};

const $user = createStore<User | null>(null);

const onAppLoaded = createEvent();

const handleAuthorizeOnLoad = createEvent();

const handleError = createEvent<Error>();

sample({
  clock: onAppLoaded,
  target: handleAuthorizeOnLoad,
});

sample({
  clock: handleAuthorizeOnLoad,
  source: $isUserFetchedOnLoad,
  filter: (src) => !src,
  target: authorizeOnLoadFx,
});

sample({
  clock: authorizeOnLoadFx.doneData,
  fn: (clk) => clk,
  target: $user,
});

sample({
  clock: authorizeOnLoadFx.failData,
  target: handleError,
});

sample({
  clock: authorizeOnLoadFx.finally,
  fn: () => true,
  target: $isUserFetchedOnLoad,
});

export const stores = { $user, $isAuthorizing, $isUserFetchedOnLoad };

export const events = { onAppLoaded, handleError };
