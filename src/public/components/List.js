import React from 'react';

function List(props) {
    return (
        <div className="list-container">
            <ul>
                {props.ToDos.map((toDo, key) => {
                    return (
                        <li key={key}>
                            {toDo} <button>Deletar</button>
                            <button>Editar</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default List;
