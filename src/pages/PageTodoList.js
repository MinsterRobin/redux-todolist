import React from "react";
import Separator from "../components/atomes/Separator";
import {H1} from "../components/atomes/Typography";
import ToDoList from "../components/organisms/ToDoList";
import TemplateTodoList from "../templates/TemplateTodoList";
import Container from "../components/atomes/Container";
import Button from "../components/atomes/Button";
import Add from "../assets/Add.svg";
import {THEMES} from "../constants/styles";
import {useDispatch, useSelector} from "react-redux";
import {selectTheme, setTheme} from "../slices/sliceTheme";

function PageTodoList() {
    const themeNumber = useSelector(selectTheme);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setTheme((themeNumber + 1) % THEMES.length));
    };

    return (
        <TemplateTodoList>
            <Container flex vertical align={"center"} primary padding={"var(--padding-size)"}>
                <H1>Redux ToDoList</H1>
                <Button primary icon={Add} onClick={() => handleClick()}/>
                <Separator/>
                <ToDoList/>
            </Container>
        </TemplateTodoList>
    );
}

export default PageTodoList;
