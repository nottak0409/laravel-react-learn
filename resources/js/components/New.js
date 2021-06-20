import React, { useState, useEffect, Component } from 'react';
import ReactDom from 'react-dom';
import { Button } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useParams, useHistory } from 'react-router-dom';

function New() {

    const history = useHistory();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    //タイトルの入力内容保存
    const handleChange = (event) => {
        if(event.target.name === "title") {
            setTitle(event.target.value);
        } else if(event.target.name === "content") {
            setContent(event.target.value);
        }
    }

    //新規作成ボタンを押したときの挙動
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { title: title, content: content }
        axios
            .post('/add', data)
            .then((res) => {
                history.push('/');
            }).catch(error => {
                console.log(error)
            })
    }

    const handleClickPagination = (offset) => {
        setOffset(offset);
    }

    return (
        <>
            <Link to="/" style={{ color: '#377abd' }}>戻る</Link>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="mr-2　border border-primary">タイトル</label>
                    <input type="text" className="form-control mr-2" name="title" value={title} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="mr-2　border border-primary">内容</label>
                    <textarea className="form-control" name="content" onChange={handleChange} value={content}></textarea>
                </div>
                <div className="form-group">
                    <Button color="primary" type="submit" disabled={title === "" || content === ""}>新規作成</Button>
                </div>
            </form>
        </>
    );
}

export default New;
