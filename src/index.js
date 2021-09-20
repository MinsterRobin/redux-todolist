import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/pages/App';
import GlobalStyles from "./components/atomes/GlobalStyles";


ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles/>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);