import {configureStore} from "@reduxjs/toolkit";
import sliceTodoList from "./slices/sliceTodoList";

export default configureStore({
    reducer: {
        todolist: sliceTodoList,
    },
});