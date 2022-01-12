import React from 'react';

function List(props) {
    return (
        <div className="list-container">
            <ul>
                {props.ToDos.map(Tarefa => {
                    return (
                        <li key={Tarefa.id}>
                            {Tarefa.toDo} <button>Deletar</button>
                            <button>Editar</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default List;
