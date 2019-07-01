import {applyMiddleware, compose, createStore} from 'redux';
import reducer from './reducers'
import thunk from 'redux-thunk';

const middleware = [thunk];

if (process.env.NODE_ENV === `development`) {
    const {logger} = require(`redux-logger`);
    middleware.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middleware)
));


export default store
