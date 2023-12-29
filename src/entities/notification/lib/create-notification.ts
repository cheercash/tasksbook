import { Notification } from "root/shared/api/type";

export type CreateNotificationData = Omit<Notification, "isHovered" | "id">;

export const createNotification = ({
  description,
  kind,
  title,
}: CreateNotificationData): Notification => ({
  description,
  id: Date.now(),
  isHovered: false,
  kind,
  title,
});
