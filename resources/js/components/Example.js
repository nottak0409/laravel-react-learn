import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Detail from './Detail.js';
import TodoApp from './TodoApp.js';

function Example() {
    return (
        <div className="container">
            <Router>
                <Switch>
                    <Route exact path="/" component={TodoApp}></Route>
                    <Route exact path="/detail/:id" component={Detail}></Route>
                </Switch>
            </Router>
        </div>
    );
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
