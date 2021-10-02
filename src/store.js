import {configureStore} from "@reduxjs/toolkit";
import sliceTodoList from "./slices/sliceTodoList";
import sliceTheme from "./slices/sliceTheme";

export default configureStore({
    reducer: {
        todolist: sliceTodoList,
        theme: sliceTheme
    },
});