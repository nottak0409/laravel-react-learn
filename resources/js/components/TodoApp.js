import React, { useState, useEffect, Component } from 'react';
import ReactDom from 'react-dom';
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Pagination from "material-ui-flat-pagination";
import Detail from "./Detail";
import DateFormat from "./DateFormat";
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo } from '../reducer/index';
import { fetchTodos } from '../reducer/index.js'

function RenderRows(props) {

    const dispatch = useDispatch();

    //削除ボタンをクリックしたときに働く関数
    const handleClick = (id) => {
        event.preventDefault();
        const data = { id: id }
        dispatch(deleteTodo(data))
    }


    //Todo一覧を表示する
    return props.todos.map(todo => {
        return (
            <TableRow key={todo.id}>
                <TableCell>
                    <Link to={{ pathname: `detail/${todo.id}` }} style={{ color: '#377abd' }}>
                        { todo.title.length > 20 ? todo.title.substr(0, 20) + "..." : todo.title}
                    </Link>
                </TableCell>
                <TableCell>
                    { DateFormat(todo.created_at) }
                </TableCell>
                <TableCell>
                    { DateFormat(todo.updated_at) }
                </TableCell>
                <TableCell>
                    <Button color="secondary" onClick={() => handleClick(todo.id, props.setTodos)}>削除</Button>
                </TableCell>
            </TableRow>
        )
    });
}

function TodoApp() {
    const [offset, setOffset] = useState(0);
    const [parpage, setParpage] = useState(8);
    //ページレンダリング時の処理
    const todosSelector = (state) => state.todos
    const todos = useSelector(todosSelector)
    //const todos_selector = useSelector(todosSelector)
    const [search, setSearch] = useState("")
    //const [todos, setTodos] = useState()

    const handleClickPagination = (offset) => {
        setOffset(offset);
    }

    //console.log(todos_selector);
    //useEffect((todos_selector) => {
    //    setTodos(todos_selector)
    //}, []);

    //タイトルの入力内容保存
    const handleSearch = (event) => {
        if(event.target.name === "search") {
            setSearch(event.target.value);
        }
    }

    return (
        <>
            <nav className="mt-3">
                <Link to='/new' style={{ color: '#377abd' }}>新規作成</Link>
            </nav>

            <div>
                <label className="mr-2　border border-primary">検索</label>
                <input type="text" className="form-control mr-2" name="search" value={search} onChange={handleSearch} />
            </div>

            <Table className="table mt-5">
                <TableHead>
                    <TableRow>
                        <TableCell>タイトル</TableCell>
                        <TableCell>作成日</TableCell>
                        <TableCell>更新日</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { Object.keys(todos).length !== 0 &&
                        <RenderRows todos={ todos.slice(offset, offset + parpage)} />
                    }
                </TableBody>
            </Table>
            <Pagination
                limit={parpage}
                offset={offset}
                total={todos.length}
                onClick={(e, offset) => handleClickPagination(offset)}
            />
        </>
    );
}

export default TodoApp;
