import styled from "styled-components";
import ItemCreator from "../molecules/ItemCreator";
import Separator from "../layouts/Separator";
import Item from "../molecules/Item";
import Container from "../atomes/Container";

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
`;

const ToDoList = () => {
    const items = ["faire à miam", "dormir", "manger", "travailler", "super longue tâche super chiante et pas très fun à faire"];

    return(
        <Layout>
            <ItemCreator/>
            <Separator height={"50px"}/>
            {items.map((item, key) =>
                <Container key={key}>
                    <Item text={item}/>
                    <Separator height={"20px"}/>
                </Container>
            )}
        </Layout>
    );
};

export default ToDoList;