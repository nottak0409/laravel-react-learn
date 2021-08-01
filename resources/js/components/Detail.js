import React, { useState, useEffect, Component } from 'react';
import ReactDom from 'react-dom';
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useParams, useHistory, useLocation } from 'react-router-dom';
import DateFormat from "./DateFormat";
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo } from '../reducer/index';

function Detail(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const id = Number(useParams().id);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const todo = useSelector((state) => state.todos.find(element => element.id === id ))

    //削除ボタンをクリックしたときに働く関数
    const handleClick = (id) => {
        event.preventDefault();
        const data = { id: id }
        dispatch(deleteTodo(data))
        .then(() => {
            history.push('/');
        });
    }

    return (
        <>
            <div className="mt-3">
                <Link to="/" style={{ color: '#377abd' }}>戻る</Link>
                <Link to={{ pathname: `/edit/${id}`, state: { todo } }} className="ml-2" style={{ color: '#377abd' }}>編集</Link>
            </div>
            <Table className="table mt-5">
                <TableHead>
                    <TableRow>
                        <TableCell>タイトル</TableCell>
                        <TableCell>内容</TableCell>
                        <TableCell>作成日</TableCell>
                        <TableCell>更新日</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={todo.id}>
                        <TableCell>{todo.title}</TableCell>
                        <TableCell>{todo.content}</TableCell>
                        <TableCell>{DateFormat(todo.created_at)}</TableCell>
                        <TableCell>{DateFormat(todo.updated_at)}</TableCell>
                        <TableCell>
                            <Button color="secondary" onClick={() => handleClick(todo.id)}>削除</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    );
}

export default Detail;
