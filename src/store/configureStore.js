import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import rootReducer from '../reducers'

export default preloadedState => {
    const middlewares = [applyMiddleware(thunk, createLogger())];
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {//browser extension
        middlewares.push(window.__REDUX_DEVTOOLS_EXTENSION__());
    }
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(...middlewares)
    )

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer)
        })
    }

    return store
};