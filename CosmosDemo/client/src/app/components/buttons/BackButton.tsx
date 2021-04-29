import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Button, { ButtonProps } from "@material-ui/core/Button";
import { useHistory } from "react-router";

interface Props extends ButtonProps {}

const BackButton = (props: Props) => {
  const history = useHistory();

  return (
    <Button
      {...props}
      onClick={() => history.goBack()}
      variant="contained"
      color="primary"
      startIcon={<ArrowBackIcon />}
    >
      Back
    </Button>
  );
};

export default BackButton;
