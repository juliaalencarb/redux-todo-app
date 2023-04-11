import TodoItem from "../TodoItem";
import { useSelector } from 'react-redux';

function TodoList() {
	const todos = useSelector(state => state.todos)

	return (
		<div className="todo-container">
			<ul className="todo-list">
				{todos.map((todo, i) => <TodoItem key={i} todo={todo} />)}
			</ul>
		</div>
	)
}

export default TodoList;