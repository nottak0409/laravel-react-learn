import React, { useState, useEffect, Component } from 'react';
import ReactDom from 'react-dom';
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useParams, useHistory } from 'react-router-dom';

function Detail() {
    const history = useHistory();
    const id = useParams().id;
    const [todo, setTodo] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    //削除ボタンをクリックしたときに働く関数
    const handleClick = (id) => {
        event.preventDefault();
        const data = { id: id }

        axios
            .post('/delete', data)
            .then((res) => {
                history.push('/');
            }).catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        const show_id = { id: id }
        axios
            .post('/show', show_id)
            .then((res) => {
                setTodo(res.data);
                setContent(res.data.content);
                setTitle(res.data.title);
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    return (
        <>
            <Link to="/" style={{ color: '#377abd' }}>戻る</Link>
            <Link to={'/edit/' + id} className="ml-2" style={{ color: '#377abd' }}>編集</Link>
            <Table className="table mt-5">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>タイトル</TableCell>
                        <TableCell>内容</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={todo.id}>
                        <TableCell>{todo.id}</TableCell>
                        <TableCell>{todo.title}</TableCell>
                        <TableCell>{todo.content}</TableCell>
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
