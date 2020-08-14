import React from 'react'
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: `url("assets/images/logo.png")`,
      height: '50px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '50px'
    }
  })
);

const Logo = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>
};

export default Logo