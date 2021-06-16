import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  tooltext: {
    paddingLeft: theme.spacing(55),
  },
  toolBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#0a2243',
  },
  logo: {
    height: '100%',
    position: 'absolute',
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(0, 3),
  },
}));

const AppHeader = (props) => {
  const classes = useStyles();
  const {
    title = 'Demo Page',
    logoSource = 'https://assets-global.website-files.com/5eb0a0358a376a75f540e0ea/605bc8ff5dd0b052c46e6d37_RXP%20group-Endorsed_svg_White.svg',
  } = props;

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <div className={classes.logo}>
          <img
            data-testid="image"
            src={logoSource}
            width="150"
            alt="RXP Group"
          />
        </div>
        <Typography data-testid="title" variant="h6">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
