import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'
const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}
const store = createStore(
    reducers /* preloadedState */,
    applyMiddleware( logger /* ...middleware */) /* any number of middlewares as arguments */
);

// const store = createStore(reducers /*Original state*/, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/*subscribe*/
store.subscribe(() => {
    // console.log("Store changed", store.getState());
});

export default store
