import './styles/App.css';

import React, { useState } from 'react';

import List from './components/List';

import Form from './components/Form';

import Item from './components/Tarefa';

function App() {
    const [ToDos, setToDos] = useState([]);

    function addToDo(toDo) {
        let item = new Item(toDo);

        setToDos([...ToDos, item]);
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
