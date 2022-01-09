import React, { useState, useEffect, useRef, useReducer } from "react";
import { ACTIONS } from "./Todolist";

const TDO = ({todo, dispatch}) => {
    const ToggleHandler = () => {
     dispatch({type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id }});
    };
    const DeleteHandler = () => {
        dispatch({type: ACTIONS.DELETE_TODO, payload: { id: todo.id }});
    };
    return (
        <>
            <div>
                <h2 style={{ color: todo.complete ? '#AAA' : '#333'}}>{todo.value}</h2>
                <button onClick={ToggleHandler}>Toggle</button>
                <button onClick={DeleteHandler}>Delete</button>
            </div>
        </>
    );
};
export default TDO;
