import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { Fragment } from 'react';
import {Typography} from '@material-ui/core';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Typography>Hacker Premier League</Typography>
      </Fragment>
    </Provider>
  );
}

export default App;
