import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducer/index.js'

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
)

const store = createStore(rootReducer, composedEnhancer);

export default store;
