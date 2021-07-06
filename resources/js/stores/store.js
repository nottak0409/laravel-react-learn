import { createStore } from 'redux';
import events from './reducer.js';

const state_value = {
    todos: [],
};

export default createStore(events);
