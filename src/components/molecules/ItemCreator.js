import React from "react";
import styled from "styled-components";
import add_button_svg from "../../assets/Add.svg";
import Input from "../atomes/Input";
import Button from "../atomes/Button";
import {COLORS} from "../../constants/styles";
import PropTypes from 'prop-types';

const Layout = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    border: 10px var(--color-text) solid;
    background-color: var(--color-text);
    border-radius: 7px;
    filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
`;

const ItemCreator = ({onSubmitClick, onChange}) => {
    return(
        <Layout>
            <Input onChange={onChange} color={COLORS.secondary} type={"text"} placeholder="New task ..."/>
            <Button secondary icon={add_button_svg} color={COLORS.secondary} onClick={onSubmitClick}/>
        </Layout>
    );
};

ItemCreator.propTypes = {
    onSubmitClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

export default ItemCreator;