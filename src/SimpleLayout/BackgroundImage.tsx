import React from 'react'
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: `url("assets/images/background_2.jpg")`,
      height: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  })
);

const BackgroundImage = (props: any) => {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>
};

export default BackgroundImage