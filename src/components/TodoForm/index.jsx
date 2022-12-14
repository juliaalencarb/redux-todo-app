
function TodoForm({ inputText, setInputText, todos, setTodos }) {
  function handleInput(e) {
    setInputText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([
     ...todos,
     {text: inputText, completed: false}
    ])
  }
    
  return (
    <form>
        <input type="text" className="todo-input" onChange={handleInput} />
		<button type="submit" className="todo-button" onClick={handleSubmit}>Add</button>
    </form>
  )
}

export default TodoForm;