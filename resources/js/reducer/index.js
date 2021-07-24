import {
    CREATE_MEMOS,
    DELETE_MEMOS,
    EDIT_MEMOS
} from '../actions/types.js';

import { client } from '../../api/client'

const initialState = [];

const events = (state = initialState, action) {
    switch(action.type) {
        case CREATE_MEMOS:
            {
                return [...state, action.payload]
            }
        case DELETE_MEMOS:
            {
                return state.filter((todo) => todo.id !== action.payload)
            }
        case EDIT_MEMOS:
        default:
            return state
    }
}

export async function fetchTodos(dispatch, getState) {
    const response = await client.get('/get')
    console.log(response);
    dispatch({ type: CREATE_MEMOS, payload: response.todos})
}

export default events;
