import React from 'react';
import './App.css';
import Create from "./article/Create";
import {Link, Route} from "react-router-dom";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Home from "./Home";

function App() {
    return (
        <div className="container">
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <Link to="/">Home</Link>
                <ul className="navbar-nav mr-aut">
                    <li><Link to="signin">Sign in</Link></li>
                </ul>
            </nav>

            <Route path="/create" component={Create}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/" exact component={Home}/>


        </div>
    );
}

export default App;
