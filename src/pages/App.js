import React from "react";
import {useSelector} from "react-redux";
import {ThemeProvider} from "styled-components";
import {THEMES} from "../constants/styles";
import GlobalStyles from "../components/atomes/GlobalStyles";
import PageTodoList from "./PageTodoList";
import {selectTheme} from "../slices/sliceTheme";

function App() {
    const themeNumber = useSelector(selectTheme);

    return (
        <ThemeProvider theme={THEMES[themeNumber]}>
            <GlobalStyles/>
            <PageTodoList />
        </ThemeProvider>
  );
}

export default App;
