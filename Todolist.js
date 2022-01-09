import React, { useState, useEffect, useRef, useReducer } from "react";
import TDO from "./TDO";

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
};

const reducer = (todo, action) => {
switch(action.type) {
    case ACTIONS.ADD_TODO:
        return [...todo, newTodo(action.payload.value)]
    case ACTIONS.TOGGLE_TODO:
        return todo.map( todo => {
            if(todo.id === action.payload.id){
                return {...todo, complete: !todo.complete };
            };
            return todo;

        });
    case ACTIONS.DELETE_TODO:
        return todo.filter(todo => todo.id !== action.payload.id);       
    default:
        return todo;
};
};

const newTodo = (value) => {
return { id: Date.now(), value: value, complete: false };
};

const Todolist = () => {

     const [todo, dispatch] = useReducer(reducer, []);
     const [value, setValue] = useState('');
     const TextHandler = (e) => {
     setValue(e.target.value);
     };
     const SubmitHandler = (e) => {
       e.preventDefault();
       dispatch({ type: ACTIONS.ADD_TODO, payload: { value: value }});
       setValue('');
     };
     
     
    return (
        <>
            <div>
            <form onSubmit={SubmitHandler}>
            <input type='text' value={value} onChange={TextHandler} />
            </form>
            <h5>
                {todo.map(todo => {
                    return <TDO key={todo.id} todo={todo} dispatch={dispatch} />
                })}
            </h5>
            </div>
        </>
    );
};
export default Todolist;

