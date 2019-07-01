import { createStore, applyMiddleware ,compose} from 'redux';
import reducer from './reducers'
import logger from 'redux-logger'
const enhancer = window._s_REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,enhancer(
    applyMiddleware(logger)
));


/*subscribe*/
store.subscribe(() => {
    // console.log("Store changed", store.getState());
});

export default store
