import 'babel-polyfill';
import 'bootstrap-css-only/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect, Switch, Route, HashRouter} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import './index.scss';

import {HomeContainer} from './app/pages/home/home';
import {AboutContainer} from './app/pages/about/about';

const main = (
  <div className="page">
    <MuiThemeProvider>
      <HashRouter>
        <Switch>
          <Route exact path="/about" component={AboutContainer}/>
          <Route exact path="/home" component={HomeContainer}/>
          <Redirect from="*" to="/home"/>
        </Switch>
      </HashRouter>
    </MuiThemeProvider>
  </div>
);

ReactDOM.render(
  main,
  document.getElementById('root')
);
