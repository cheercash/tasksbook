import { createEvent, sample } from "effector";
import { notification, session } from "root/entities";
import { CreateNotificationData } from "root/entities/notification/lib";
import { Notification, NotificationKind } from "root/shared/api/type";

const makeAlert = createEvent<Notification>();

sample({
  clock: [session.model.events.handleDanger],
  fn: (clk): CreateNotificationData => ({ ...clk, kind: "danger" }),
  target: notification.model.events.addNotification,
});

sample({
  clock: [session.model.events.handleSuccess],
  fn: (clk): CreateNotificationData => ({ ...clk, kind: "success" }),
  target: notification.model.events.addNotification,
});

sample({
  clock: [session.model.events.handleInfo],
  fn: (clk): CreateNotificationData => ({ ...clk, kind: "info" }),
  target: notification.model.events.addNotification,
});

sample({
  clock: notification.model.stores.$notifications,
  filter: (clk) => !!clk[0],
  fn: (clk) => clk[0],
  target: makeAlert,
});

// TODO: delete
const kindToChar: Record<NotificationKind, string> = {
  danger: "🔴",
  info: "⚪️",
  success: "🟢",
};

// TODO: delete
sample({
  clock: makeAlert,
  fn: (clk) =>
    alert(
      [kindToChar[clk.kind], clk.title, clk.description]
        .filter((item) => item !== null && item !== undefined)
        .join(" "),
    ),
});
