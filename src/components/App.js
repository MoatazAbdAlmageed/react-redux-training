import React from 'react';
import './App.css';
import Create from "./article/Create";
import {Link, Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src="/favicon.ico" alt="React"/>
                <h1>React</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/create">Create Article</Link></li>
                </ul>

            </header>


            <Route path="/create" component={Create}/>

        </div>
    );
}

export default App;
