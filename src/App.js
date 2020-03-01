import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.min';
import './assets/css/style.css';
import ReactDOM from 'react-dom';
import React from 'react';
import TodoList from './TodoList';
import { List } from './components/List.jsx';

function App() {
    return(
        <div className="list-container">
            <List/>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
