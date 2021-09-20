import React from "react";
import styled from "styled-components";
import Separator from "../layouts/Separator";
import {H1} from "../atomes/Typography";
import ToDoList from "../organisms/ToDoList";

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    max-width: 1280px;
    min-height: 100vh;
    background-color: var(--color-primary);
    padding: var(--padding-size);
`;

function App() {
    return (
        <Layout>
            <H1>Redux ToDoList</H1>
            <Separator/>
            <ToDoList/>
        </Layout>
  );
}

export default App;
