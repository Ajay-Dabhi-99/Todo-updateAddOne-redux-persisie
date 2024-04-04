import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const TodoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload);
    },
    editTodo: (state, action) => {
      console.log(action);
      const { id, title, description } = action.payload;
      const existingTodo = state.find((Todo) => Todo.id === id);
      console.log("user", existingTodo);
      if (existingTodo) {
        existingTodo.title = title,
        existingTodo.description = description
      }
    },

    deleteTodo: (state, action) => {
      return state.filter((Todo) => Todo.id !== action.payload);
    },
  },
  // extraReducers:(builder) =>{
  //   builder.addCase(logInUser.fulfilled, (state, action) => {
  //     let user = action?.payload?.data?.Data;
  //     state.user = user ? user : {};
  //   });
  // }
});

export const { addTodos, deleteTodo, editTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
