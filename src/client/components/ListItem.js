import React from 'react';

function ListItem(props) {
    return (
        <li>
            {props.Tarefa.text}
            <button
                onClick={() => {
                    props.onDelete(props.Tarefa);
                }}
            >
                Deletar
            </button>
        </li>
    );
}
export default ListItem;
