import './public/App.css';

import React, { useState } from 'react';

import List from './public/components/List';

import Form from './public/components/Form';

function App() {
    const [ToDos, setToDos] = useState([]);

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
