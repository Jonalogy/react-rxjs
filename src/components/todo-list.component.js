import React from 'react';

export const TodoList = (props) => {
    return (
        <div>
            {props.todos.map((todo, idx) =><li key={`todo${idx}`}>{todo}</li>)}
        </div>
    )
}
