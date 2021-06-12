import React, { useState, useEffect, Component } from 'react';
import ReactDom from 'react-dom';
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core';
import { BrowserRouter as Router, Route } from "react-router-dom";

function Detail() {

    const [todo, setTodo] = useState([]);
    const [title, setTitle] = useState("");

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { title: title }
        axios
            .post('/add', data)
            .then((res) => {
                setTodos(res.data)
                setTitle("");
            }).catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        axios
            .get('/api/get')
            .then((res) => {
                setTodos(res.data);
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="mr-2 border border-primary">新規Todo</label>
                    <input type="text" className="form-control mr-2" name="title" value={title} onChange={handleChange} />
                    <Button color="primary" type="submit" disabled={title === ""}>新規作成</Button>
                </div>
            </form>
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
                            <Button color="secondary" onClick={() => handleClick(todo.id, props.setTodos)}>削除</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    );
}

export default Detail
