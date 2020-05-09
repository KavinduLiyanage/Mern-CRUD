import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import Create from "./components/create.component";
import Edit from "./components/edit.component";
import List from "./components/list.component";
import './App.css';

class App extends Component{

    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to={'/'} className="navbar-brand">React crud</Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/create'} className="nav-link">Create</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/list'} className="nav-link">Product List</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <h2>welcome to react crud</h2>

                    <Switch>
                        <Route exact path = '/create' component = { Create }/>
                        <Route path = '/edit/:id' component = { Edit }/>
                        <Route path = '/list' component = { List }/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
