import { nanoid } from "nanoid";
import { useState } from "react";

const Create = (props) => {

    const todos = props.todos
    const settodos = props.settodos

    const [title, settitle] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        const newTodo = {
            id: nanoid(),
            title: title,
            isCompleted: true,
        }

        let copyTodos = [...todos]
        copyTodos.push(newTodo)
        settodos(copyTodos)
        // settodos([...todos, newTodo])

        settitle("");

        const buttoncss = {
            color: "white",
            padding: "5px 10px",
            backgroundColor: "transparent",
            border: "1px solid white"
        }

    }

    return (
        <>
            <h1>Create Tasks</h1>
            <form onSubmit={submitHandler}>
                <input
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                    type="text"
                    placeholder="Title"
                />
                <br />
                <br />
                <button>Create Todo</button>
            </form>
        </>
    );
};

export default Create;
