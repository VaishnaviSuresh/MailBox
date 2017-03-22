import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import { Router, Route, IndexRoute } from 'react-router';

import store,{history} from './store';

import {AppModule} from './components/AppModule';
import NewMail from './components/NewMail';
import Outbox from './components/Outbox';
import Inbox from './components/Inbox';
import Login from './components/Login';
import MailBox from './components/MailBox';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={AppModule}>
                <IndexRoute component={Login} />
                <Route path="/mailbox/:username" component={MailBox}>
                    <IndexRoute component={Inbox} />
                    <Route path="/mailbox/:username/inbox" component={Inbox} />
                    <Route path="/mailbox/:username/outbox" component={Outbox} />
                    <Route path="/mailbox/:username/newMail" component={NewMail} />
                </Route>
            </Route>            
            
        </Router>
    </Provider>, document.getElementById('root'))