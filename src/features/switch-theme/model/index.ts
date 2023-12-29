import { createEffect, createEvent, sample } from "effector";
import { session } from "root/entities";
import { SwitchThemeReq, switchThemeReq } from "../api";

const switchThemeFx = createEffect(switchThemeReq);

const $isThemeSwitching = switchThemeFx.pending;

const onSwitchButtonClicked = createEvent();

const handleSwitchTheme = createEvent();

sample({
  clock: onSwitchButtonClicked,
  target: handleSwitchTheme,
});

sample({
  clock: handleSwitchTheme,
  source: session.model.stores.$user,
  filter: (src) => !!src,
  fn: (src): SwitchThemeReq => ({ theme: src!.theme }),
  target: switchThemeFx,
});

sample({
  clock: switchThemeFx.doneData,
  source: session.model.stores.$user,
  filter: (src) => !!src,
  fn: (src, clk): session.model.User => ({ ...src!, theme: clk }),
  target: session.model.stores.$user,
});

export const stores = {
  $isThemeSwitching,
};

export const events = {
  onSwitchButtonClicked,
};
