export type Notification = {
  id: number;
  isHovered: false;
  kind: NotificationKind;
} & NotificationBody;

export type NotificationBody = {
  title: string | undefined | null;
  description: string;
};

export type NotificationKind = "danger" | "success" | "info";
