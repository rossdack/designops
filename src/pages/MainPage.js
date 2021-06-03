import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';
import NavigationBar from '@/components/NavigationBar';
import ROUTES from '@/constants/routes';
import AppRouter from '@/components/AppRouter';
import AppHeader from '@/lib/AppHeader';

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
      <AppHeader title="RXP Design Library" />
      <NavigationBar {...props} />
      <main className={classes.content}>
        <Toolbar />
        <AppRouter routes={ROUTES} />
      </main>
    </div>
  );
};

export default MainPage;
