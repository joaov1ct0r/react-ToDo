import React from 'react';

import ListItem from './ListItem';

function List(props) {
    return (
        <div className="list-container">
            <ul>
                {props.ToDos.map(Tarefa => (
                    <ListItem
                        id={Tarefa.id}
                        key={Tarefa.id}
                        Tarefa={Tarefa}
                        onDelete={props.onDelete}
                    ></ListItem>
                ))}
            </ul>
        </div>
    );
}

export default List;
