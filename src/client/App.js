import './styles/App.css';

import React, { useState } from 'react';

import List from './components/List';

import Form from './components/Form';

import item from './components/Tarefa';

function App() {
    const [ToDos, setToDos] = useState([]);

    function addToDo(toDo) {
        setToDos([...ToDos, toDo]);
    }

    console.log(ToDos);

    return (
        <div className="App">
            <Form onClick={addToDo}></Form>

            <List ToDos={ToDos}></List>
        </div>
    );
}

export default App;
