import React, { useState, useEffect, Component } from 'react';
import ReactDom from 'react-dom';


function RenderRows(props) {
    console.log(props);
    return props.todos.map(todo => {
        return (
            <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td><button className="btn btn-secondary">完了</button></td>
            </tr>
        )
    });
}

function TodoApp() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        console.log("aaaa");
        axios
            .get('/api/get')
            .then((res) => {
                setTodos(res.data);
            })
            .catch(error => {
                console.log(error)
            })
    });

    return (
        <>
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th></th>
                        <th>完了</th>
                        <th>完了</th>
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
