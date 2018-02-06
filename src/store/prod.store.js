const {applyMiddleware, compose, createStore} = require('redux');
const thunk = require('redux-thunk').default;
const rootReducer = require('../reducers').default;

module.exports = createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
);