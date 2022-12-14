function TodoItem({todo}) {
	return(
		<li className="todo">
		    <span className="todo-item">{todo.text}</span>
		</li>
	)
	}

export default TodoItem;