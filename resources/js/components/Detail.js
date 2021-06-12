import React, { useState, useEffect, Component } from 'react';
import ReactDom from 'react-dom';
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

function Detail() {
    const id = useParams().id;
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
        const show_id = { id: id }
        axios
            .post('/show', show_id)
            .then((res) => {
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
                            <Button color="secondary" onClick={() => handleClick(todo.id, props.setTodos)}>削除</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    );
}

export default Detail;
