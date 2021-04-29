import { Button } from "@material-ui/core";
import React from "react";
import { useNotificationContext } from "../../../app/context/NotificationProvider";

const Notification = () => {
  const {
    sendSuccessNotification,
    sendWarningNotification,
    sendErrorNotification,
  } = useNotificationContext();

  const handleSendSuccess = () => sendSuccessNotification("Success");
  const handleSendWarning = () => sendWarningNotification("Warning");
  const handleSendError = () => sendErrorNotification("Error");

  return (
    <div>
      <Button onClick={handleSendSuccess}>Success</Button>
      <Button onClick={handleSendWarning}>Warning</Button>
      <Button onClick={handleSendError}>Error</Button>
    </div>
  );
};

export default Notification;
