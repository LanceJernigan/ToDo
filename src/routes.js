import React from 'react'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import store from './store'
import App from './components/app/'

const history = syncHistoryWithStore(browserHistory, store)

const routes = (
    <Provider store={store} >
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={App} />
                <Route path="/:taskID" component={App} />
            </Route>
        </Router>
    </Provider>
)

export default routes