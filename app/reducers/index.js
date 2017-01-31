import {combineReducers} from 'redux';
import videos from './videoreducer.js';
import favorite from './favoritereducer.js';

export default combineReducers({
    videos,
    favorite
});