import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import GlobalStyles from "./components/atomes/GlobalStyles";
import { Provider} from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import sliceTodoList from "./slices/sliceTodoList";

const store = configureStore({
    reducer: {
        todolist: sliceTodoList,
    },
});


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyles/>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);