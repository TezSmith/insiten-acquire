import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history';
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import rootReducer from '../reducers';

const history = createBrowserHistory()

const middleware = applyMiddleware(promise,thunk)
const store = createStore(rootReducer, composeWithDevTools(middleware))

export default store;
