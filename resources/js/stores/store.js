import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import events from '../reducer/index.js';

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
)

const store = createStore(events, composedEnhancer);

export default store;
