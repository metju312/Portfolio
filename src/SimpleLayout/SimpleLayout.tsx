import React from 'react'
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    img: {
      backgroundImage: `url("assets/images/background_main.jpg")`,
      height: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  })
);

const SimpleLayout = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.img}></div>
      <div>cos</div>
    </>
  )
};

export default SimpleLayout