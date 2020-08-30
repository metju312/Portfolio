import React from 'react'
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: '#343a40',
      color: '#dee2e6',
      fontsize: '.875rem',
      margin: 'auto',
    },
    content: {
      margin: 'auto',
      maxWidth: '1110px',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '24px 200px'
    },
    rights: {

    },
    icons: {
      color: 'red',
      fontsize: '40px',
    }
  })
);

const Footer = () => {
  const classes = useStyles();
  return <div className={classes.root}>
    <div className={classes.content}>
      <div className={classes.rights}>
        © 2020, Mateusz Sadło. All rights reserved.
      </div>
      <div className={classes.icons}>
        <FontAwesomeIcon icon={["fab", "github"]} />
        <FontAwesomeIcon icon={["fab", "facebook-square"]} />
        <FontAwesomeIcon icon={["fab", "facebook-messenger"]} />
        <FontAwesomeIcon icon={["fab", "twitter-square"]} />
        <FontAwesomeIcon icon={["fab", "youtube"]} />
      </div>
    </div>
  </div>
};

export default Footer