import rootReducer from '../reducers'
import {syncHistoryWithStore} from "react-router-redux";
import {browserHistory} from "react-router";
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

var initialState={
    message:[]
}

const logger=createLogger();

var store=createStore(rootReducer,applyMiddleware(thunk,logger));
export const history = syncHistoryWithStore(browserHistory,store); 


export default store