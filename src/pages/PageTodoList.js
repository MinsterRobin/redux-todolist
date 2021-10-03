import React from "react";
import Separator from "../components/atomes/Separator";
import {H1} from "../components/atomes/Typography";
import ToDoList from "../components/organisms/ToDoList";
import TemplateTodoList from "../templates/TemplateTodoList";
import Container from "../components/atomes/Container";
import ThemeSelector from "../components/organisms/ThemeSelector";

function PageTodoList() {
    return (
        <TemplateTodoList>
            <Container flex vertical align={"center"} primary padding={"var(--padding-size)"}>
                <H1>Redux ToDoList</H1>
                <Separator height="10px"/>
                <ThemeSelector/>
                <Separator/>
                <ToDoList/>
            </Container>
        </TemplateTodoList>
    );
}

export default PageTodoList;
