import React, { useState, useEffect, Component } from 'react';
import ReactDom from 'react-dom';


function RenderRows(props) {
    return props.todos.map(todo => {
        return (
            <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>
                    <button></button>
                </td>
            </tr>
        )
    });
}

function TodoApp() {

    const [todos, setTodos] = useState([]);

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
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>タイトル</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <RenderRows todos={todos}/>
                </tbody>
            </table>
        </>
    );
}

export default TodoApp;
