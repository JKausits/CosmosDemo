import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import React, { Fragment } from "react";

interface Props {
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  prompt: string;
}

const ConfirmDeleteModal = ({
  title = "Confirm Delete",
  prompt,
  onClose,
  onConfirm,
}: Props) => {
  return (
    <Fragment>
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {prompt}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <Button onClick={onConfirm} color="secondary" autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Fragment>
  );
};

export default ConfirmDeleteModal;
