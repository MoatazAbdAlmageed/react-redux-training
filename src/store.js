import { createStore, applyMiddleware ,compose} from 'redux';
import reducer from './reducers'
const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

const enhancer = window._s_REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,enhancer(
    applyMiddleware(logger)
));


/*subscribe*/
store.subscribe(() => {
    // console.log("Store changed", store.getState());
});

export default store
