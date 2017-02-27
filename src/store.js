import {createStore,combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import taskReducer from './components/tasks/reducer'

export const store = createStore(combineReducers({
    tasks: taskReducer,
    routing: routerReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store