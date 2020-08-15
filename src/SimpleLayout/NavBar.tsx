import React from 'react'
import {Button, createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Logo from "./Logo";
import {grey, purple} from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '70px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: '30px',
      paddingRight: '30px'
    },
    navBarButtons: {

    },
    logInButton: {
      color: '#d0d0d0',
      borderColor: '#d0d0d0',
      '&:hover': {
        color: '#f5f5f5',
        borderColor: '#f5f5f5',
      },
      marginLeft: '30px'
    },
    secondaryButton: {
      color: '#d0d0d0',
      marginLeft: '22px'
    }
  })
);

const NavBar = (props: any) => {
  const classes = useStyles();
  return <>
    <div className={classes.root}>
      <Logo/>
      <div className={classes.navBarButtons}>
        <Button className={classes.secondaryButton}>My work</Button>
        <Button className={classes.secondaryButton}>Contact</Button>
        <Button variant="outlined" className={classes.logInButton}>Say hello</Button>
      </div>
    </div>
  </>
};

export default NavBar