import {applyMiddleware, compose, createStore} from 'redux';
import reducer from './reducers'

const middlewares = [];

if (process.env.NODE_ENV === `development`) {
    const {logger} = require(`redux-logger`);
    middlewares.push(logger);
}

const enhancer = window._s_REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, enhancer(
    applyMiddleware(...middlewares)
));


/*subscribe*/
store.subscribe(() => {
    // console.log("Store changed", store.getState());
});

export default store
