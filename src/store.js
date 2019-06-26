import {createStore} from 'redux'
import reducers from './reducers'

const store = createStore(reducers /*Original state*/, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


/*subscribe*/
store.subscribe(() => {
    console.log("Store changed", store.getState());
});

export default store
