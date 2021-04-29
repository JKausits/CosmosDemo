import React, { useEffect } from "react";
import { useNotificationContext } from "../context/NotificationProvider";
import { NotificationDto, NotificationTypeEnum } from "../models/Notification";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  notificationContainer: {
    zIndex: 100,
    position: "absolute",
    right: 10,
    top: 10,
    width: "300px",
  },
});

const Notification = (notification: NotificationDto) => {
  const { removeNotification } = useNotificationContext();
  const getSeverity = (type: NotificationTypeEnum) => {
    switch (type) {
      case NotificationTypeEnum.success:
        return "success";
      case NotificationTypeEnum.danger:
        return "error";
      case NotificationTypeEnum.warning:
        return "warning";
      default:
        return "info";
    }
  };

  useEffect(() => {
    setTimeout(() => {
      removeNotification(notification.id);
    }, 3000);
  }, [removeNotification, notification.id]);

  return (
    <Alert
      onClose={() => removeNotification(notification.id)}
      severity={getSeverity(notification.type)}
      style={{ marginBottom: "8px" }}
    >
      {notification.message}
    </Alert>
  );
};

const NotificationContainer = () => {
  const classes = useStyles();

  const { notifications } = useNotificationContext();

  return (
    <div className={classes.notificationContainer}>
      {notifications.map((n) => (
        <Notification key={n.id} {...n} />
      ))}
    </div>
  );
};

export default NotificationContainer;
