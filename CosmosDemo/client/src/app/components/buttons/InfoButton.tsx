import React from "react";
import ActionButton, { ActionButtonProps } from "./ActionButton";
import InfoIcon from "@material-ui/icons/Info";

const InfoButton = (props: ActionButtonProps) => {
  return (
    <ActionButton {...props} icon={<InfoIcon style={{ color: "#5bc0de" }} />} />
  );
};

export default InfoButton;
