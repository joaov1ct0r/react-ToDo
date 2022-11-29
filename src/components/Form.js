import React, { useState } from 'react';

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
        <div className="form-container">
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

export default Form;
