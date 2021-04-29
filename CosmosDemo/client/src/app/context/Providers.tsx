import React from "react";
import { ModalProvider } from "./ModalProvider";
import { NotificationProvider } from "./NotificationProvider";
import { RequestProvider } from "./RequestProvider";

const Providers = ({ children }) => {
  return (
    <ModalProvider>
      <NotificationProvider>
        <RequestProvider>{children}</RequestProvider>
      </NotificationProvider>
    </ModalProvider>
  );
};

export default Providers;
