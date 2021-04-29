import { IconButton, IconButtonProps, Tooltip } from "@material-ui/core";
import React from "react";

export interface ActionButtonProps extends IconButtonProps {
  tooltip?: string;
}

interface IProps extends ActionButtonProps {
  icon: React.ReactNode;
}

const ActionButton = ({ tooltip, icon, ...props }: IProps) => {
  const button = <IconButton {...props}>{icon}</IconButton>;

  if (tooltip)
    return (
      <Tooltip title={tooltip} placement="right">
        {button}
      </Tooltip>
    );

  return button;
};

export default ActionButton;
