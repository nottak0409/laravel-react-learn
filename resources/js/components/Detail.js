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

    //inputのタイトルを変更
    const handleChange = (event) => {
        setTitle(event.target.value)
    }

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

    //編集時の処理
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { title: title, id: id }
        axios
            .post('/edit', data)
            .then((res) => {
                setTodo(res.data)
                setTitle(res.data.title);
            }).catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        const show_id = { id: id }
        axios
            .post('/show', show_id)
            .then((res) => {
                console.log(res);
                setTodo(res.data);
                setTitle(res.data.title);
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="mr-2 border border-primary">Todo編集</label>
                    <input type="hidden" name="id" value="{id}" />
                    <input type="text" className="form-control mr-2" name="title" value={title} onChange={handleChange} />
                    <Button color="primary" type="submit" disabled={title === ""}>編集</Button>
                </div>
            </form>
            <Link to="/">戻る</Link>
            <Table className="table mt-5">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>タイトル</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={todo.id}>
                        <TableCell>{todo.id}</TableCell>
                        <TableCell>{todo.title}</TableCell>
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
