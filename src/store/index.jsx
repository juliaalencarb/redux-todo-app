import { legacy_createStore } from 'redux';

// TODO: create different reducers based on functionality, and use combine reducers function to bundle all of them together.
// create action-creators to have dispatch functions separated from components. Refer to Money Deposit example.

// reducer
const todosReducer = (state=( {todos: [], userInput: ""} ), action) => {
    switch (action.type) {
        case 'getInputText':
            return  {...state, userInput: action.payload} 

        case 'getTodoList':
            return {...state, 
                todos: [...state.todos, { text: action.payload, completed: false }], 
                userInput: ""};
        
        case 'deleteTodo':
            return {...state, todos: state.todos.filter(todo => todo !== action.payload)}
        
        default:
            return state;
    }
};

// const [inputText, setInputText] = useState('');
// const [todos, setTodos] = useState([]);
// store
const store = legacy_createStore(todosReducer);


export default store;