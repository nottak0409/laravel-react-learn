import { CREATE_MEMOS, EDIT_MEMOS, DELETE_MEMOS } from './types';

export const createMemos = ({ title, content }) => ({
    type: CREATE_MEMOS,
    payload: {

    }
});

export const editMemos = ({ title, content }) => ({
    type: EDIT_MEMOS,
    payload: {

    }
});

export const deleteMemos = id => ({
    type: DELETE_MEMOS,
    payload: {
        id: id
    }
});
