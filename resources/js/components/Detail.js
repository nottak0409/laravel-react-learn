import React, { useState, useEffect, Component } from 'react';
import ReactDom from 'react-dom';
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useParams, useHistory, useLocation } from 'react-router-dom';

function Detail(props) {
    const history = useHistory();
    const id = useParams().id;
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { todo } = props.location.state;

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
    return (
        <>
            <Link to="/" style={{ color: '#377abd' }}>戻る</Link>
            <Link to={{ pathname: `/edit/${id}`, state: { todo } }} className="ml-2" style={{ color: '#377abd' }}>編集</Link>
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
