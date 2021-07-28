import {
    CREATE_MEMOS,
    DELETE_MEMOS,
    EDIT_MEMOS,
    LOADED_MEMOS
} from '../actions/types.js';

import { client } from '../api/client'

const initialState = {
    todos: {}
}

export default function events(state = initialState, action) {
    switch(action.type) {
        case CREATE_MEMOS:
            {
                return {...state, todos: action.payload}
            }
        case DELETE_MEMOS:
            {
                return state.filter((todo) => todo.id !== action.payload)
            }
        case EDIT_MEMOS:
        case LOADED_MEMOS:
            {
                return { todos: action.payload }
            }
        default:
            return state
    }
}

export async function fetchTodos(dispatch, getState) {
    const response = await client.get('/get')
    dispatch({ type: LOADED_MEMOS, payload: response})
}
