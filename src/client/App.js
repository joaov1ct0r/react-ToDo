import './styles/App.css';

import React, { useState } from 'react';

import List from './components/List';

import Form from './components/Form';

import Item from './components/Tarefa';
import { useEffect } from 'react/cjs/react.development';

const SAVED_TODOS = 'savedToDos';

function App() {
    const [ToDos, setToDos] = useState([]);

    useEffect(() => {
        let savedToDos = JSON.parse(localStorage.getItem(SAVED_TODOS));

        if (savedToDos) {
            setToDos(savedToDos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(SAVED_TODOS, JSON.stringify(ToDos));
    }, [ToDos]);

    function addToDo(toDo) {
        let item = new Item(toDo);

        setToDos([...ToDos, item]);
    }

    function deleteToDo(toDo) {
        let filteredItems = ToDos.filter(toDos => toDos.id !== toDo.id);

        setToDos(filteredItems);
    }
    return (
        <div className="App">
            <Form onClick={addToDo}></Form>

            <List onDelete={deleteToDo} ToDos={ToDos}></List>
        </div>
    );
}

export default App;
