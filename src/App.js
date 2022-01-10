import './App.css';

import React, { useState } from 'react';

function App() {
    const [Text, setText] = useState('');

    const [ToDos, setToDos] = useState([]);

    function handleText(event) {
        let text = event.target.value;

        setText(text);
    }

    function handleClick(event) {
        event.preventDefault();
        if (Text) {
            setToDos([...ToDos, Text]);
            setText('');
        }
    }

    return (
        <div className="App">
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

                <div className="list-container">
                    <ul>
                        <li>Item</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
