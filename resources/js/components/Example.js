import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp.js';

function Example() {
    return (
        <div className="container">
            <TodoApp></TodoApp>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
