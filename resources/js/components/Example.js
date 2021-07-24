import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Detail from './Detail.js';
import TodoApp from './TodoApp.js';
import Edit from './Edit.js';
import New from './New.js';
import store from '../stores/store.js'

function Example() {
    return (
        <div className="container">
            <Router>
                <Switch>
                    <Route exact path="/" component={TodoApp}></Route>
                    <Route exact path="/detail/:id" component={Detail}></Route>
                    <Route exact path="/edit/:id" component={Edit}></Route>
                    <Route exact path="/new" component={New}></Route>
                </Switch>
            </Router>
        </div>
    );
}

if (document.getElementById('example')) {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <Example />
            </Provider>
        </React.StrictMode>,
    document.getElementById('example'));
}
