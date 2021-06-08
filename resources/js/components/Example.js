import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp.js';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">test component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
            <TodoApp></TodoApp>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
