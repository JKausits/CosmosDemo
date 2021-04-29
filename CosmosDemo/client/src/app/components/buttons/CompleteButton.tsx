import CheckIcon from "@material-ui/icons/Check";
import React from "react";
import ActionButton, { ActionButtonProps } from "./ActionButton";

const AddButton = (props: ActionButtonProps) => {
  return (
    <ActionButton {...props} icon={<CheckIcon style={{ color: "green" }} />} />
  );
};

export default AddButton;
