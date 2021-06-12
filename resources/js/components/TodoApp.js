import React, { useState, useEffect, Component } from 'react';
import ReactDom from 'react-dom';
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core';

function RenderRows(props) {
    const handleClick = (id) => {
        console.log(id);
    }

    return props.todos.map(todo => {
        return (
            <TableRow key={todo.id}>
                <TableCell>{todo.id}</TableCell>
                <TableCell>{todo.title}</TableCell>
                <TableCell>
                    <Button color="secondary" onClick={() => handleClick(todo.id)}>削除</Button>
                </TableCell>
            </TableRow>
        )
    });
}

function TodoApp() {

    const [todos, setTodos] = useState([]);
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
                    <Button color="primary">新規作成</Button>
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
                    <RenderRows todos={todos}/>
                </TableBody>
            </Table>
        </>
    );
}

export default TodoApp;
