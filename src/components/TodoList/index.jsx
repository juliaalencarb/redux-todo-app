import TodoItem from "../TodoItem";

function TodoList({ todos, setTodos }) {
	function deleteTodo(todo) {
		let filteredTodos = todos.filter(el => el !== todo);
		setTodos(filteredTodos);
	}

	function completeTodo(todo) {
		setTodos(todos.map((item) => {
			if(item === todo) {
				return {
					...item, completed: !item.completed
				}
			}
			return item;
		}))
	}

	return (
		<div className="todo-container">
			<ul className="todo-list">{todos.map((todo, i) => <TodoItem todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} key={i} />)}</ul>
		</div>
	)
}

export default TodoList;