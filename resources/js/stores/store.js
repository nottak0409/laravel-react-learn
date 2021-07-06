import { createStore } from 'redux';
import events from '../reducer/index.js';

const state_value = {
    todos: [],
};

export default createStore(events);
