import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';
import NavigationBar from '@/components/NavigationBar';
import ROUTES from '@/constants/routes';
import Router from '@/components/Router';
import AppHeader from '@/components/AppHeader';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const MainPage = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppHeader />
      <NavigationBar {...props} />
      <main className={classes.content}>
        <Toolbar />
        <Router routes={ROUTES} />
      </main>
    </div>
  );
};

export default MainPage;
