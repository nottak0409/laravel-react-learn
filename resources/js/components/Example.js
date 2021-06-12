import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Detail from './Detail';
import TodoApp from './TodoApp.js';

function Example() {
    return (
        <div className="container">
            <Router>
                <Route exact path="/" component={TodoApp}/>
                <Route path="/Detail/:id" component={Detail}/>
            </Router>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
