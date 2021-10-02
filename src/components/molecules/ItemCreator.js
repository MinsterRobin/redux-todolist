import React from "react";
import styled from "styled-components";
import add_button_svg from "../../assets/Add.svg";
import Input from "../atomes/Input";
import Button from "../atomes/Button";
import PropTypes from 'prop-types';

const Layout = styled.form`
    display: flex;
    width: 100%;
    height: 80px;
    border: 10px ${props => props.theme.text} solid;
    background-color: ${props => props.theme.text};
    border-radius: 7px;
    filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
`;

const ItemCreator = ({onSubmitClick, onChange, error}) => {
    return(
        <Layout onSubmit={(e) => {e.preventDefault(); onSubmitClick(e)}}>
            <Input
                warning={error}
                secondary
                onChange={onChange}
                type={"text"}
                placeholder="New task ..."
            />
            <Button secondary icon={add_button_svg} type="submit"/>
        </Layout>
    );
};

ItemCreator.propTypes = {
    onSubmitClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.bool
};

export default ItemCreator;