import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Main from'./app/components/main.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import OneVideo from './app/components/onevideo.js';
import Videolist from './app/components/videolist.js';
import Favorite from './app/components/favorite.js';
import videoApp from './app/reducers';



let store = createStore(videoApp, applyMiddleware(thunk));

ReactDom.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={hashHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute component={Videolist} />
                    <Route path="oneVideo/:id" component={OneVideo} />
                    <Route path="favorite" component={Favorite} />
                </Route>
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')

);


