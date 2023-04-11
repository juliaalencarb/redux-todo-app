import { useDispatch } from 'react-redux';

function TodoItem({todo}) {
	const dispatch = useDispatch();

	function deleteTodo() {
		dispatch({ type: 'deleteTodo', payload: todo })
	}

	function completeTodo() {
		setTodos(todos.map((item) => {
			if(item === todo) {
				return {
					...item, completed: !item.completed
				}
			}
			return item;
		}))
	}

	return(
		<li className="todo">
			<span className={`todo-item ${todo.completed ? 'completed' : ''}`}>{todo.text}</span>
			<button className="trash-btn" onClick={() => deleteTodo()}>Delete</button>
			<button className="complete-btn" onClick={() => completeTodo()}>Complete</button>
		</li>
	)
	}

export default TodoItem;