const {applyMiddleware, compose, createStore} = require('redux');
const thunk = require('redux-thunk').default;
const {createLogger} = require('redux-logger');
const rootReducer = require('../reducers').default;

const middlewares = [applyMiddleware(thunk, createLogger())];
if (window.__REDUX_DEVTOOLS_EXTENSION__) {//browser extension
    middlewares.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}
const store = createStore(
    rootReducer,
    compose(...middlewares)
);

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
        store.replaceReducer(rootReducer)
    })
}

module.exports = store;
