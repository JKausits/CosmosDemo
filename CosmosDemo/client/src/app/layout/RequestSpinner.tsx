import React, { Fragment } from "react";
import { useRequestContext } from "../context/RequestProvider";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 100000,
      color: "#fff",
    },
    label: {
      color: "white",
      textAlign: "center",
      size: "10rem",
    },
    spinnerContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

const RequestSpinner = () => {
  const { requests } = useRequestContext();
  const classes = useStyles();

  if (requests.length === 0) return <Fragment></Fragment>;

  return (
    <Backdrop open={requests.length !== 0} className={classes.backdrop}>
      <div className={classes.spinnerContainer}>
        <CircularProgress color="inherit" size="100px" />
        <h1 className={classes.label}>{requests[0].message}</h1>
      </div>
    </Backdrop>
  );
};

export default RequestSpinner;
