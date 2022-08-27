export const List = ({todos, deleteTodo}) => {
    const complete = (id) => {
        deleteTodo(id);
        return;
    }

    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}>
                    <button onClick={() => complete(todo.id)}>完了</button>
                    <span>{todo.content}</span>
                </div>
            ))}

        </div>
    );
}