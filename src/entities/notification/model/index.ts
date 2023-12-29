import { createEvent, createStore, sample } from "effector";
import { CreateNotificationData, createNotification } from "../lib";
import { Notification } from "root/shared/api/type";

const $notifications = createStore<Notification[]>([]);

export type AddNotification = CreateNotificationData;

const addNotification = createEvent<AddNotification>();

sample({
  clock: addNotification,
  source: $notifications,
  fn: (src, clk) => [createNotification(clk), ...src],
  target: $notifications,
});

export const stores = { $notifications };

export const events = { addNotification };
