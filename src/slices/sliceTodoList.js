import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'todolist',
    initialState: {
        items: ["My first task"],
        error: false
    },
    reducers: {
        addItem: (state,action) => {
            if (state.items.indexOf(action.payload) === -1) {
                state.items.push(action.payload);
            } else {
                state.error = true;
            }
        },
        deleteItem: (state, action) => {
            state.items.splice(action.payload,1);
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const {addItem, deleteItem, setError} = slice.actions;

export const selectTodoList = state => state.todolist.items;
export const selectError = state => state.todolist.error;

export default slice.reducer;
