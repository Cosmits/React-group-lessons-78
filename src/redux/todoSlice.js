const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    todos: [],
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload];
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    },
});

export const {addTodo, deleteTodo} = todosSlice.actions;

export const selectTodos = state => state.todos;

export const todosSliceReducer = todosSlice.reducer;