import React from "react";
import ActionButton, { ActionButtonProps } from "./ActionButton";
import AddIcon from "@material-ui/icons/Add";

const AddButton = (props: ActionButtonProps) => {
  return (
    <ActionButton
      {...props}
      icon={
        <AddIcon
          style={{
            color: "green",
            border: "1px solid green",
            borderRadius: "50%",
          }}
        />
      }
    />
  );
};

export default AddButton;
