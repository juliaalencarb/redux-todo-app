import TodoItem from "../TodoItem";

function TodoList({ todos }) {
	return(
		<div className="todo-container">
            <ul className="todo-list">{todos.map((todo) => <TodoItem />)}</ul>
		</div>
	)
}

export default TodoList;