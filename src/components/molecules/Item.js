import React from "react";
import styled from "styled-components";
import {COLORS} from "../../constants/styles";
import Button from "../atomes/Button";
import PropTypes from 'prop-types';
import trash_icon from "../../assets/Trash.svg";
import check_icon from "../../assets/Check.svg";
import Separator from "../layouts/Separator";
import {H2} from "../atomes/Typography";

const Layout = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    border: 10px var(--color-text) solid;
    background-color: var(--color-tertiary);
    border-radius: 7px;
    filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
    align-items: center;
    padding-left: 10px;
`;

const ItemText = styled(H2)`
    flex: 1;
    white-space: nowrap;
    overflow: auto;
    
    &::-webkit-scrollbar {
      display: none;
    }
    
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
`;

const Item = ({text, onDoneButtonClick, onTrashButtonClick}) => {
    return(
        <Layout>
            <ItemText>{text}</ItemText>
            <Separator vertical height={"10px"}/>
            <Button secondary icon={check_icon} color={COLORS.secondary} onClick={onDoneButtonClick}/>
            <Button primary icon={trash_icon} color={COLORS.primary} onClick={onTrashButtonClick}/>
        </Layout>
    );
};

Item.propTypes = {
    text: PropTypes.string.isRequired,
    onDoneButtonClick: PropTypes.func.isRequired,
    onTrashButtonClick: PropTypes.func.isRequired
};

export default Item;