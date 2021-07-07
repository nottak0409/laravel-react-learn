import { CREATE_MEMOS, EDIT_MEMOS, DELETE_MEMOS } from './types';

export const createMemos = ({ title, url }) => ({
    type: CREATE_MEMOS,
    payload: {

    }
});

export const editMemos = ({ title, url }) => ({
    type: EDIT_MEMOS,
    payload: {

    }
});

export const deleteMemos = ({ title, url }) => ({
    type: DELETE_MEMOS,
    payload: {

    }
});
