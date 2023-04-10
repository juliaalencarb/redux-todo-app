import { legacy_createStore, combineReducers } from 'react-redux';

// store
const reducers = combineReducers({ inputReducer, todosReducer });
const store = legacy_createStore(reducers);

// reducers
const inputReducer = (state=( {userInput: ''} ), action) => {
    switch (action.type) {
        case 'getInputText':
            
            return { userInput: action.payload };
    
        default:
            return state;
    }
};

const todosReducer = (state=( {todos: []} ), action) => {
    switch (action.type) {
        case 'getTodoList':
            return [...state.todos, action.payload];
    
        default:
            return state;
    }
};

// const [inputText, setInputText] = useState('');
// const [todos, setTodos] = useState([]);

export default store;