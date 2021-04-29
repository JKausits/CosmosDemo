import Dialog from "@material-ui/core/Dialog";
import React from "react";
import { useModalContext } from "../context/ModalProvider";

const ModalContainer = () => {
  const { isOpen, content, close } = useModalContext();

  return (
    <Dialog open={isOpen} onClose={close}>
      {content}
    </Dialog>
  );
};

export default ModalContainer;
