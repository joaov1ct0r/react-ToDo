import './App.css';

import React, { useState } from 'react';

function App() {
    const [Text, setText] = useState('');

    function handleText(event) {
        let text = event.target.value;

        setText(text);
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
                    />

                    <button type="submit">Adicionar</button>
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
