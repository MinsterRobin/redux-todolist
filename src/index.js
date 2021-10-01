import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import GlobalStyles from "./components/atomes/GlobalStyles";
import { Provider} from "react-redux";
import store from "./store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyles/>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);