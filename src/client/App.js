import './styles/App.css';

import React, { useEffect, useState } from 'react';

import List from './components/List';

import Form from './components/Form';

import api from './services/api';

function App() {
    window.addEventListener('DOMContentLoaded', () => {
        getAllToDos();
    });

    const [ToDos, setToDos] = useState([]);

    function getAllToDos() {
        api.get('/api/all')
            .then(res => {
                return res.data;
            })
            .then(data => {
                setToDos(data);
            });
    }

    function addToDo(toDo) {
        setToDos([...ToDos, toDo]);
    }

    return (
        <div className="App">
            <Form onClick={addToDo}></Form>

            <List ToDos={ToDos}></List>
        </div>
    );
}

export default App;
