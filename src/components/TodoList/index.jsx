import TodoItem from "../TodoItem";

function TodoList({ todos }) {
	return(
		<div className="todo-container">
            <ul className="todo-list">{todos.map((todo, i) => <TodoItem todo={todo} key={i} />)}</ul>
		</div>
	)
}

export default TodoList;