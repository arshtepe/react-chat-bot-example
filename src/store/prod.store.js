import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

module.exports = createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(thunk))
);