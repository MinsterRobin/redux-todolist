import React, {useState} from "react";
import Separator from "../layouts/Separator";
import {H1} from "../atomes/Typography";
import ToDoList from "../organisms/ToDoList";
import TemplateTodoList from "../templates/TemplateTodoList";
import Container from "../atomes/Container";

function App() {
    const [items, setItems] = useState(["Ma première tâche"]);

    return (
        <TemplateTodoList>
            <Container flex vertical align={"center"} primary padding={"var(--padding-size)"}>
                <H1>Redux ToDoList</H1>
                <Separator/>
                <ToDoList items={items} setItems={setItems}/>
            </Container>
        </TemplateTodoList>
  );
}

export default App;
