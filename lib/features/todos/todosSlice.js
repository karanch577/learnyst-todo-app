const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    todos: []
}

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload]
        },
        toggleIsComplete: (state, action) => {
            state.todos = state.todos.map(todo => {
                if(todo.id === action.payload) {
                    todo.isCompleted = !todo.isCompleted;
                }

                return todo;
            })
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo => {
                if(todo.id === action.payload.id) {
                    return action.payload;
                }

                return todo;
            })
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(item => item.id !== action.payload)
        }
    }
})

export const { addTodo, toggleIsComplete, updateTodo, deleteTodo } = todosSlice.actions

export default todosSlice.reducer;