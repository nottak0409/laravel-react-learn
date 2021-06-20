import React, { useState, useEffect, Component } from 'react';
import ReactDom from 'react-dom';
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useParams, useHistory } from 'react-router-dom';

function Edit() {
    const history = useHistory();
    const id = useParams().id;
    const [todo, setTodo] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

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
        axios
            .post('/edit', data)
            .then((res) => {
                setTodo(res.data)
                setTitle(res.data.title);
                history.push('/detail/' + id);
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
            <Link to={'/detail/' + id} className="ml-2" style={{ color: '#377abd' }}>戻る</Link>
            <Link to='/' className="ml-2" style={{ color: '#377abd' }}>ホーム</Link>
        </>
    );
}

export default Edit;
