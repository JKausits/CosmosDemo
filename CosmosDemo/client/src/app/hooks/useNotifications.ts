import { useCallback, useState } from "react";
import { v4 } from "uuid";
import { NotificationDto, NotificationTypeEnum } from "../models/Notification";

export interface UseNotification {
  notifications: NotificationDto[];
  sendSuccessNotification: (message: string) => void;
  sendWarningNotification: (message: string) => void;
  sendErrorNotification: (message: string) => void;
  sendNotification: (message: string, type: NotificationTypeEnum) => void;
  removeNotification: (id: string) => void;
}

export const useNotification = (): UseNotification => {
  const [notifications, setNotifications] = useState<NotificationDto[]>([]);

  const sendNotification = useCallback(
    (message: string, type: NotificationTypeEnum) => {
      const id = v4();
      setNotifications((notifications) => [
        ...notifications,
        new NotificationDto(id, message, type),
      ]);
    },
    [setNotifications]
  );

  const sendSuccessNotification = useCallback(
    (message: string) => {
      sendNotification(message, NotificationTypeEnum.success);
    },
    [sendNotification]
  );

  const sendWarningNotification = useCallback(
    (message: string) => {
      sendNotification(message, NotificationTypeEnum.warning);
    },
    [sendNotification]
  );

  const sendErrorNotification = useCallback(
    (message: string) => {
      sendNotification(message, NotificationTypeEnum.danger);
    },
    [sendNotification]
  );

  const removeNotification = useCallback(
    (id: string) => {
      setNotifications((notifications) =>
        notifications.filter((n) => n.id !== id)
      );
    },
    [setNotifications]
  );

  return {
    notifications,
    sendSuccessNotification,
    sendWarningNotification,
    sendErrorNotification,
    sendNotification,
    removeNotification,
  };
};
