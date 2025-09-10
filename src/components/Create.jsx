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
        <div className="w-[60%] flex flex-col gap-5 h-full text-center text-white p-5">
            <h1 className="text-3xl font-bold tracking-widest border-1 p-4 uppercase">Set <span className="text-red-400">Reminders</span> for tasks</h1>
            <form className="w-full h-full border-1 p-4" onSubmit={submitHandler}>
                <input
                    className="w-full h-[3rem] border-1 rounded-lg p-4 font-semibold"
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                    type="text"
                    placeholder="Title"
                />
                <br />
                <br />
                <button className="w-[50%] p-3 rounded-lg border-1 bg-red-400 border-red-500 font-semibold">Create Todo</button>
            </form>
        </div>
    );
};

export default Create;
