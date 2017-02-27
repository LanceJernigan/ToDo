import {createStore,combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

export const store = createStore(combineReducers({
    routing: routerReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store