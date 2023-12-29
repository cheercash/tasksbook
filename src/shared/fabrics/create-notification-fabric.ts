import { createEvent } from "effector";
import { NotificationBody } from "../api/type";

export const createNotificationFabric = () => {
  const handleDanger = createEvent<NotificationBody>();

  const handleSuccess = createEvent<NotificationBody>();

  const handleInfo = createEvent<NotificationBody>();

  return { handleDanger, handleSuccess, handleInfo };
};
