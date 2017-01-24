import React from 'react';
import ReactDom from 'react-dom';
import Main from'./app/main.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import OneVideo from './app/onevideo.js';
import Videolist from './app/videolist.js';





ReactDom.render(

    <MuiThemeProvider>
        <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Videolist} />
            <Route path="oneVideo/:id" component={OneVideo} />

        </Route>
    </Router>
    </MuiThemeProvider>,

    document.getElementById('app')

);


