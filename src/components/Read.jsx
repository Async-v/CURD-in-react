const Read = (props) => {

    const todos = props.todos
    const settodos = props.settodos

    const rendertodos = todos.map(todo => {
        return <li key={todo.id}>{todo.title}</li>;
    })

    return (
        <>
            <h1 style={{color: "tomato"}}>Pending Todos</h1>
            <ol>{rendertodos}</ol>
        </>
    )
}

export default Read