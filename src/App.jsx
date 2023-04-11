import React, {useState} from 'react';
import './App.css';
import { TodoForm, TodoList } from './components';

function App() {
  // const [inputText, setInputText] = useState('');
  // const [todos, setTodos] = useState([]);
  
  return (
    <div>
      <header>Sarah's Todo List</header>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;

// inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}
// todos={todos} setTodos={setTodos}
