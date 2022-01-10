import React from 'react';

function List(props) {
    return (
        <ul>
            {props.ToDos.map((toDo, key) => {
                return <li key={key}>{toDo}</li>;
            })}
        </ul>
    );
}

export default List;
