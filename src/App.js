import './App.css';

import React, { useState } from 'react';

import List from './components/List';

import Form from './components/Form';

function App() {
    const [ToDos, setToDos] = useState([]);

    function addToDo(toDo) {
        setToDos([...ToDos, toDo]);
    }

    return (
        <div className="App">
            <Form onClick={addToDo}></Form>

            <div className="list-container">
                <List ToDos={ToDos}></List>
            </div>
        </div>
    );
}

export default App;
