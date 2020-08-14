import React from 'react'
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {

    },
    logoText: (props: any) => ({
      fontSize: '18px',
      color: 'black',
      fontWeight: 900,
      textTransform: 'uppercase',
      letterSpacing: '2px'
    }),
    img: {
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
  return <div className={classes.root}>
    <p className={classes.logoText}>Matthew</p>
  </div>
};

export default Logo