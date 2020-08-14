import React from 'react'
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import BackgroundImage from "./BackgroundImage";
import NavBar from "./NavBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Logo from "./Logo";
import WorkCard from "./WorkCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
    },
    workCards: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginTop: '100px',
      marginBottom: '100px'
    }
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
      </div>
    </div>
  )
};

export default SimpleLayout