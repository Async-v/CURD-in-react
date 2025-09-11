import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const submitHandler = (data) => {
        data.id = nanoid(),
            data.isCompleted = false

        const newtodos = [...todos]
        newtodos.push(data)
        settodos(newtodos)

        toast.success("Todo Created!", {
            theme: "dark"
        })

        reset()
    };

    return (
        <div className="w-[60%] flex flex-col gap-5 h-full text-center text-white p-5">
            <h1 className="text-3xl font-bold tracking-widest border-1 p-4 uppercase">
                Set <span className="text-red-400">Reminders</span> for tasks
            </h1>
            <form className="w-full h-full border-1 p-4" onSubmit={handleSubmit(submitHandler)}>
                <input
                    {...register("title", { required: "Title can not be empty" })}
                    className="w-full h-[3rem] border-1 rounded-lg p-4 font-semibold"
                    type="text"
                    placeholder="Title"
                />
                {/* {errors && errors.title && errors.title.message &&
                    < small> {errors.title.message }</small>
                } */}

                <small className="text-red-400 font-semibold">{errors?.title?.message}</small>

                
            <br />
            <br />
            <button className="w-[50%] p-3 rounded-lg border-1 bg-red-400 border-red-500 font-semibold">
                Create Todo
            </button>
        </form>
        </div >
    );
};

export default Create;
