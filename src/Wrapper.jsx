import React, { createContext } from 'react'
import { useState } from "react";


export const todocontext = createContext(null)

const wrapper = (props) => {
    const [todos, settodos] = useState([
        { id: 1, title: "kamm karle bhai", isCompleted: false }
    ]);

    return (
        <todocontext.Provider value={ [todos, settodos] }>
            {props.children}
        </todocontext.Provider>
    );
};



export default wrapper