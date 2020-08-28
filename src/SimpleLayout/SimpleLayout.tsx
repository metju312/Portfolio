import React from 'react'
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import BackgroundImage from "./BackgroundImage";
import NavBar from "./NavBar";
import WorkCard from "./WorkCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      width: `100%`
    },
    workCards: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: '85px',
      marginBottom: '100px',
      maxWidth: '1140px',
      margin: 'auto',
    },
  })
);

const SimpleLayout = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BackgroundImage>
        <NavBar></NavBar>
      </BackgroundImage>
      <div className={classes.workCards}>
        <WorkCard/>
        <WorkCard/>
        <WorkCard/>
        <WorkCard/>
        <WorkCard/>
        <WorkCard/>
      </div>
    </div>
  )
};

export default SimpleLayout