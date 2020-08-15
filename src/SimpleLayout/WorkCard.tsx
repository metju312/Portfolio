import React from 'react'
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      width: '100%',
      borderRadius: '.4rem',
      boxShadow: '0 0 1rem rgba(0,0,0,.15)',
      marginRight: 'auto',
      marginLeft: 'auto'
    },
    img:{
      backgroundImage: `url("assets/images/travel1.jpg")`,
      height: '234px',
      width: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      borderTopLeftRadius: 'calc(.4rem - 1px)',
      borderTopRightRadius: 'calc(.4rem - 1px)'
    },
    content: {
      padding: '20px'
    },
    category: {
      textTransform: 'uppercase',
      letterSpacing: '.15em',
      fontSize: '.975rem',
      fontWeight: 400,
      color: '#868e96',
      textDecoration: 'none',
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline'
      },
    },
    title: {

    },
    date: {

    },
    description: {

    },
    showDetailsLink: {

    }
  })
);

const WorkCard = () => {
  const classes = useStyles();
  return <div className={classes.root + "content-width"}>
    <div className={classes.img}></div>
    <div className={classes.content}>
      <a className={classes.category}>Travel</a>
      <a className={classes.title}>Autumn fashion tips and tricks</a>
      <p className={classes.date}>January 16, 2016</p>
      <p className={classes.description}>Pellentesque habitant morbi tristique senectus. Vestibulum tortor quam, feugiat vitae, ultricies ege...</p>
      <a className={classes.showDetailsLink}>Continue reading</a>
    </div>
  </div>
};

export default WorkCard