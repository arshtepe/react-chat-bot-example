import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

module.exports = createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
);