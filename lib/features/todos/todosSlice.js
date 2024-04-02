const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    todos: []
}

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, payload) => {
            state.todos = [...state.todos, ...payload]
        }
    }
})

export const { addTodo } = todosSlice.actions

export default todosSlice.reducer;