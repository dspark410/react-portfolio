import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EmailIcon from '@material-ui/icons/Email';
import Fade from '@material-ui/core/Fade';
import Email from "../Email"
import Popper from '@material-ui/core/Popper';





const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  paper: {
    // border: '0.5px solid cornflowerblue',
    boxShadow:"0 0 10px cornflowerblue",
    borderRadius: "5px",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    marginBottom:"30px",
    width:"300px"
  },
}));

export default function TransitionsPopper() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'transitions-popper' : undefined;

  return (
    <div>
       <div className={classes.root}>
          <Fab onClick={handleClick} style={{ backgroundColor: "cornflowerblue", color: "#eee", position: "fixed", bottom: "0", right: "0", marginBottom: "30px", marginRight: "30px", height: "70px", width: "70px", outline:"none" }} aria-label="add">
            <EmailIcon style={{ fontSize: "30px" }} />
          </Fab>

      </div>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={1000}>
            <div className={classes.paper}><Email/></div>
          </Fade>
        )}
      </Popper>
    </div>
  );
}


