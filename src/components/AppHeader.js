import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const AppHeader = (props) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className="toolContainer">
        <div className="toolBar">
          <img
            src="https://assets-global.website-files.com/5eb0a0358a376a75f540e0ea/605bc8ff5dd0b052c46e6d37_RXP%20group-Endorsed_svg_White.svg"
            width="150"
            alt="RXP Group"
          />
          <Typography variant="h6" noWrap className="toolText">
            RXP Design Library
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));
