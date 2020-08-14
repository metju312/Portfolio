import React from 'react'
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      width: '350px'
    },
    img:{
      backgroundImage: `url("assets/images/work_card_1.png")`,
      height: '234px',
      width: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  })
);

const WorkCard = () => {
  const classes = useStyles();
  return <div className={classes.root}>
    <div className={classes.img}></div>
    <button>My work</button>
    <button>My work</button>
    <button>My work</button>
  </div>
};

export default WorkCard