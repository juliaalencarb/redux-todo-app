function TodoItem({ todo, deleteTodo, completeTodo }) {
	function deleteHandler() {
		deleteTodo(todo);
	}

	function completeHandler() {
  		completeTodo(todo);
	}

	return(
		<li className="todo">
			<span className={`todo-item ${todo.completed ? 'completed' : ''}`}>{todo.text}</span>
			<button className="trash-btn" onClick={deleteHandler}>Delete</button>
			<button className="complete-btn" onClick={completeHandler}>Complete</button>
		</li>
	)
	}

export default TodoItem;