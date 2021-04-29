import React from "react";
import ActionButton, { ActionButtonProps } from "./ActionButton";
import EditIcon from "@material-ui/icons/Edit";
const EditButton = (props: ActionButtonProps) => {
  return <ActionButton {...props} icon={<EditIcon />} />;
};

export default EditButton;
