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

    }

    return (
        <div className="w-[50%] flex flex-col gap-5 h-full text-center p-5 bg-amber-100">
            <h1 className="text-3xl font-bold tracking-widest border-2 p-4 uppercase">Create Tasks</h1>
            <form className="w-full h-full border-2 p-4" onSubmit={submitHandler}>
                <input
                    className="w-full h-[3rem] border-1 rounded-lg p-4 font-semibold"
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                    type="text"
                    placeholder="Title"
                />
                <br />
                <br />
                <button className="w-[50%] p-3 rounded-lg border-1 bg-amber-200 font-semibold">Create Todo</button>
            </form>
        </div>
    );
};

export default Create;
