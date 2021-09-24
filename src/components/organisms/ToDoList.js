import styled from "styled-components";
import ItemCreator from "../molecules/ItemCreator";
import Separator from "../layouts/Separator";
import Item from "../molecules/Item";
import React, {useState} from "react";
import PropTypes from 'prop-types';
import Transition from "../atomes/transition";

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
`;

const ToDoList = ({items, setItems}) => {
    const [newItem, setNewItem] = useState("");

    const updateItems = (action, payload) => {
        let tempArray = items;
        switch (action) {
            case "ADD":
                setItems([...items,payload]);
                break;
            case "DONE":
                tempArray.splice(payload,1);
                setItems([...tempArray]);
                break;
            case "TRASH":
                tempArray.splice(payload,1);
                setItems([...tempArray]);
                break;
            default:
                return items;
        }
    };

    const itemCreatorChange = (e) => {
        setNewItem(e.target.value);
    };

    return(
        <Layout>
            <ItemCreator
                onChange={itemCreatorChange}
                onSubmitClick={() => {updateItems("ADD", newItem)}}
            />

            <Separator height={"50px"}/>

            {items.map((item, key) =>
                <React.Fragment key={key}>
                    <Transition>
                        <Item
                            text={item}
                            onDoneButtonClick={() => {updateItems("DONE", key)}}
                            onTrashButtonClick={() => {updateItems("TRASH", key)}}
                        />
                        <Separator height={"20px"}/>
                    </Transition>
                </React.Fragment>
            )}
        </Layout>
    );
};

ToDoList.propTypes = {
    items: PropTypes.array.isRequired,
    setItems: PropTypes.func.isRequired,
};

export default ToDoList;