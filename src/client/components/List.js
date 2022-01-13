import React from 'react';

function List(props) {
    return (
        <div className="list-container">
            <ul>
                {props.ToDos.map(Tarefa => {
                    return (
                        <li id={Tarefa.id} key={Tarefa.id}>
                            {Tarefa.text}
                            <button
                                onClick={() => {
                                    props.onDelete(Tarefa);
                                }}
                            >
                                Deletar
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default List;
