import React from 'react';

import api from '../services/api';

function List(props) {
    function handleButton(event) {
        if (event.target.tagName === 'BUTTON') {
            const button = event.target;

            const li = button.parentNode;

            const ul = li.parentNode;

            if (button.textContent === 'Deletar') {
                api.delete(`/api/delete/${li.id}`).then(res => {
                    console.log(res);

                    ul.removeChild(li);
                });
            }
        }
    }
    return (
        <div className="list-container">
            <ul>
                {props.ToDos.map(Tarefa => {
                    return (
                        <li id={Tarefa.id} key={Tarefa.id}>
                            {Tarefa.text}
                            <button onClick={handleButton}>Deletar</button>
                            <button>Editar</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default List;
