import styled from "styled-components";
import ItemCreator from "../molecules/ItemCreator";
import Separator from "../layouts/Separator";
import Item from "../molecules/Item";
import React, {useState} from "react";
import PropTypes from 'prop-types';
import {useTransition, animated} from "react-spring";

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
`;

const TransitionContainerSC = styled(animated.div)`
    width: 100%;
`;

const ToDoList = ({items, setItems}) => {
    const [newItem, setNewItem] = useState("");
    const [error, setError] = useState(false);

    const handleItemCreatorChange = (e) => {
        error && setError(false);
        setNewItem(e.target.value);
    };

    const updateItems = (action, payload) => {
        let tempArray = items;
        switch (action) {
            case "ADD":
                items.indexOf(newItem) === -1 ? setItems([...items, payload]) : setError(true);

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
                onSubmitClick={() => updateItems("ADD", newItem)}
                error={error}
            />

            <Separator height={"50px"}/>

            {transitions((styles, item, t) =>
                <TransitionContainerSC style={styles} key={t.key}>
                    <Item
                        text={item}
                        onDoneButtonClick={() => updateItems("DONE", t.key)}
                        onTrashButtonClick={() => console.log(t.key)}
                    />
                    <Separator height={"20px"}/>
                </TransitionContainerSC>
            )}

        </Layout>
    );
};

ToDoList.propTypes = {
    items: PropTypes.array.isRequired,
    setItems: PropTypes.func.isRequired,
};

export default ToDoList;