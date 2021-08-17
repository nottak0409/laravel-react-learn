import {
    LOADED_MEMOS,
    SUCCESS_LOADING,
    FILTER_MEMOS,
    STATUS_MEMOS
} from '../actions/types.js';

import { client } from '../api/client'

const initialState = {
    todos: {},
    loading: false
}

export default function events(state = initialState, action) {
    switch(action.type) {
        case LOADED_MEMOS:
            {
                return { todos: action.payload, loading: true }
            }
        case SUCCESS_LOADING:
            {
                return { ...state, loading: false }
            }
        default:
            return state
    }
}

//初期遷移時に、データをDBから取ってくる処理
export async function fetchTodos(dispatch, getState) {
    const response = await client.get('/get')
    dispatch({ type: LOADED_MEMOS, payload: response})
    dispatch({ type: SUCCESS_LOADING })
}

//todo一覧画面で検索を行った際の処理
export function searchTodos(data) {
    return async function searchTodosThunk(dispatch, getState) {
        const response = await client.post('/search', data)
        dispatch({ type: LOADED_MEMOS, payload: response })
        dispatch({ type: SUCCESS_LOADING })
    }
}

//新規登録時にデータを保存する処理
export function saveNewTodo(data) {
    return async function saveNewTodoThunk(dispatch, getState) {
        const response = await client.post('/add', data)
        dispatch({ type: LOADED_MEMOS, payload: response })
        dispatch({ type: SUCCESS_LOADING })
    }
}

//編集時にデータを保存する処理
export function editTodo(data) {
    return async function editTodoThunk(dispatch, getState) {
        const response = await client.post('/edit', data)
        dispatch({ type: LOADED_MEMOS, payload: response })
        dispatch({ type: SUCCESS_LOADING })
    }
}

//データを削除する処理
export function deleteTodo(data) {
    return async function deleteTodoThunk(dispatch, getState) {
        const response = await client.post('/delete', data)
        dispatch({ type: LOADED_MEMOS, payload: response })
    }
}
