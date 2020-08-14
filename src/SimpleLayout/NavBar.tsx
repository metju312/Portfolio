import React from 'react'
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  })
);

const NavBar = (props: any) => {
  const classes = useStyles();
  return <>
    <div className={classes.root}>
      {props.children}
    </div>
  </>
};

export default NavBar