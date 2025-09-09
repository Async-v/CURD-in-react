// import style from "./Read.module.css"

const Read = (props) => {
    
    const todos = props.todos
    const settodos = props.settodos

    const deleteHandler = (id) => {
        const filtertodos = todos.filter((todo)=> todo.id != id)
        settodos(filtertodos)
    }

    const rendertodos = todos.map(todo => {
        return <div className= "w-full flex py-2 px-5 border-1 align-middle rounded-lg">
            <li className="w-full py-1 h-fit text-left font-semibold" key={todo.id}>{todo.title}</li>
            <button className="bg-red-500 rounded-lg px-5 font-semibold py-1 border-1" onClick={() => deleteHandler(todo.id)}>Delete</button>
        </div>
    })

    return (
        <div className="w-[50%] flex flex-col gap-5 h-full text-center p-5 bg-amber-100">
            <h1 className="text-3xl font-bold tracking-widest border-2 p-4 uppercase">Pending Todos</h1>
            <ol className="w-full h-full flex flex-col gap-4 border-2 p-4 overflow-hidden">{rendertodos}</ol>
        </div>
    )
}

export default Read