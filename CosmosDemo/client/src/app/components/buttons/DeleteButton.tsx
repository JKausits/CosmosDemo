import React from "react";
import ActionButton, { ActionButtonProps } from "./ActionButton";
import DeleteIcon from "@material-ui/icons/Delete";

const DeleteButton = (props: ActionButtonProps) => {
  return (
    <ActionButton {...props} icon={<DeleteIcon style={{ color: "red" }} />} />
  );
};

export default DeleteButton;
