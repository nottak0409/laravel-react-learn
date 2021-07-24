import {
    CREATE_MEMOS,
    DELETE_MEMOS,
    EDIT_MEMOS
} from '../actions/types.js';

const events = (state = [], action) {
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

export default events;
