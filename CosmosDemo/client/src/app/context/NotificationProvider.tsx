import React, { useContext } from "react";
import { useNotification, UseNotification } from "../hooks/useNotifications";
import { NotificationTypeEnum } from "../models/Notification";

const NotificationContext = React.createContext<UseNotification>({
  notifications: [],
  sendSuccessNotification: (message: string) => {},
  sendWarningNotification: (message: string) => {},
  sendErrorNotification: (message: string) => {},
  sendNotification: (message: string, type: NotificationTypeEnum) => {},
  removeNotification: (id: string) => {},
});

export const NotificationProvider = ({ children }) => {
  let value = useNotification();

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => useContext(NotificationContext);
