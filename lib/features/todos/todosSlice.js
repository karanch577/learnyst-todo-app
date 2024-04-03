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
        }
    }
})

export const { addTodo, toggleIsComplete } = todosSlice.actions

export default todosSlice.reducer;