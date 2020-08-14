import React from 'react'
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import BackgroundImage from "./BackgroundImage";
import NavBar from "./NavBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Logo from "./Logo";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%'
    }
  })
);

const SimpleLayout = () => {
  const classes = useStyles();
  return (
    <>
      <BackgroundImage>
        <NavBar>
          <Logo />
          <h4>Tytuł </h4>
          <h2>Tytuł</h2>
          <h2>Tytuł</h2>
        </NavBar>
      </BackgroundImage>
      <p>cos</p>
      <FontAwesomeIcon icon="coffee" />
    </>
  )
};

export default SimpleLayout