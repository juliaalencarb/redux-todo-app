import { useSelector, useDispatch } from 'react-redux';

function TodoForm() {
  
  const dispatch = useDispatch();
  const inputText = useSelector(state => state.userInput);

  function handleInput(e) {
    dispatch({ type: 'getInputText', payload: e.target.value })
  }  
  
  // function handleInput(e) {
  //   setInputText(e.target.value);
  // }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: 'getTodoList', payload: inputText })
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setTodos([
  //    ...todos,
  //    {text: inputText, completed: false}
  //   ])
  //   setInputText('')
  // }
    
  return (
    <form>
      <input value={inputText} type="text" className="todo-input" onChange={handleInput} />
      <button type="submit" className="todo-button" onClick={handleSubmit}>Add</button>
    </form>
  )
}

export default TodoForm;

// { inputText, setInputText, todos, setTodos }