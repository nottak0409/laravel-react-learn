import {
    CREATE_MEMOS,
    DELETE_MEMOS,
    EDIT_MEMOS
} from '../actions/index.js';

const events = (state = [], action) {
    switch(action.type) {
        case CREATE_MEMOS:
        case DELETE_MEMOS:
        case EDIT_MEMOS:
        default:
            return state
    }
}
