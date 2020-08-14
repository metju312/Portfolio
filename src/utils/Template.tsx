import React from 'react'
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    }
  })
);

const Template = () => {
  const classes = useStyles();
  return <React.PureComponent className={classes.root}>
    <button>My work</button>
  </React.PureComponent>
};

export default Template