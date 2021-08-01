import React, { useState, useEffect, Component } from 'react';
import ReactDom from 'react-dom';
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { editTodo } from '../reducer/index';

function Edit(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const id = Number(useParams().id);
    const [todo, setTodo] = useState(props.location.state.todo);
    const [title, setTitle] = useState(todo.title);
    const [content, setContent] = useState(todo.content);
    //inputのタイトルを変更
    const handleChange = (event) => {
        if(event.target.name === "title") {
            setTitle(event.target.value);
        } else if(event.target.name === "content") {
            setContent(event.target.value);
        }
    }

    //編集時の処理
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { title: title, id: id, content: content }
        dispatch(editTodo(data))
        .then(() => {
            history.push({ pathname: `/detail/${id}`, state: { todo }});
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="mr-2">Todo編集</label>
                    <input type="hidden" name="id" value="{id}" />
                    <input type="text" className="form-control mr-2" name="title" value={title} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="mr-2　border border-primary">内容</label>
                    <textarea className="form-control" name="content" onChange={handleChange} value={content}></textarea>
                </div>
                <div className="form-group">
                    <Button color="primary" type="submit" disabled={title === "" || content === ""}>編集</Button>
                </div>
            </form>
            <Link to={{ pathname: `/detail/${id}`, state: { todo } }} style={{ color: '#377abd' }}>戻る</Link>
            <Link to='/' className="ml-2" style={{ color: '#377abd' }}>ホーム</Link>
        </>
    );
}

export default Edit;
