import React from 'react'
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      width: '400px',
      borderRadius: '.4rem',
      boxShadow: '0 0 1rem rgba(0,0,0,.15)',
      margin: '0 30px'
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
      padding: '20px',
      display: 'grid',
      gridTemplateColumns: '1fr',
      rowGap: '10px'
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
      color: '#343a40',
      textDecoration: 'none',
      fontSize: '1.4rem',
      fontWeight: 700,
      lineHeight: 1.3,
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    date: {
      display: 'flex',
      alignItems: 'center',
      color: '#adb5bd',
      fontSize: '.875rem',
    },
    description: {
      color: '#868e96',
      fontSize: '.875rem'
    },
    showDetailsLink: {
      color: '#4e66f8',
      letterSpacing: '.3em',
      textTransform: 'uppercase',
      fontWeight: 700,
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    dateLabel: {
      marginLeft: '3px'
    }
  })
);

const WorkCard = () => {
  const classes = useStyles();
  return <div className={classes.root}>
    <div className={classes.img}></div>
    <div className={classes.content}>
      <div className={classes.category}>Travel</div>
      <div className={classes.title}>Autumn fashion tips and tricks</div>
      <div className={classes.date}>
        <QueryBuilderIcon />
        <p className={classes.dateLabel}>January 16, 2016</p>
      </div>
      <div className={classes.description}>Pellentesque habitant morbi tristique senectus. Vestibulum tortor quam, feugiat vitae, ultricies ege...</div>
      <div className={classes.showDetailsLink}>Continue reading</div>
    </div>
  </div>
};

export default WorkCard