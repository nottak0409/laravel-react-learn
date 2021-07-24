import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import events from '../reducer/index.js';

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
)

export default createStore(events, composedEnhancer);
