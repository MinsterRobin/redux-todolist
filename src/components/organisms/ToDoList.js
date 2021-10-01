import styled from "styled-components";
import ItemCreator from "../molecules/ItemCreator";
import Separator from "../atomes/Separator";
import Item from "../molecules/Item";
import React, {useState} from "react";
import {useTransition, animated} from "react-spring";
import {useDispatch, useSelector} from "react-redux";
import {addItem, deleteItem, setError, selectTodoList, selectError} from "../../slices/sliceTodoList";

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
`;
const ToDoList = () => {
    const [newItem, setNewItem] = useState("");
    const items = useSelector(selectTodoList);
    const error = useSelector(selectError);
    const dispatch = useDispatch();

    const handleItemCreatorChange = (e) => {
        setNewItem(e.target.value);
        items.indexOf(e.target.value) !== -1 ? dispatch(setError(true)) : dispatch(setError(false));
    };

    const transitions = useTransition(items , {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
        keys: item => items.indexOf(item)
    });

    return(
        <Layout>
            <ItemCreator
                onChange={handleItemCreatorChange}
                onSubmitClick={() => dispatch(addItem(newItem))}
                error={error}
            />

            <Separator height={"50px"}/>

            {transitions((styles, item, t) =>
                <animated.div style={{styles, width: "100%"}} key={t.key}>
                    <Item
                        text={item}
                        onDoneButtonClick={() => dispatch(deleteItem(t.key))}
                        onTrashButtonClick={() => console.log(t.key)}
                    />
                    <Separator height={"20px"}/>
                </animated.div>
            )}

        </Layout>
    );
};

export default ToDoList;