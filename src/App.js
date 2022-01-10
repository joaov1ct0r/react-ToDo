import './App.css';

import React, { useState } from 'react';

import List from './components/List';

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

function Form(props) {
    const [Text, setText] = useState('');

    function handleText(event) {
        let text = event.target.value;

        setText(text);
    }

    function handleClick(event) {
        event.preventDefault();
        if (Text) {
            props.onClick(Text);
            setText('');
        }
    }

    return (
        <div className="toDo-container">
            <h1>To Do List</h1>

            <form>
                <input
                    onChange={handleText}
                    type="text"
                    placeholder="Nova tarefa"
                    value={Text}
                />

                <button onClick={handleClick} type="submit">
                    Adicionar
                </button>
            </form>
        </div>
    );
}

export default App;
