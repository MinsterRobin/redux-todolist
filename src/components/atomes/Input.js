import styled from "styled-components";
import PropTypes from 'prop-types';

const Input = styled.input`
    width: 100%;
    flex: 1;
    background-color: ${props => props.color};  
    color: var(--color-text);
    font-family: var(--font-family-primary);
    font-size: var(--font-size-large);    
    padding-left: 10px;
    border: none;
    
    &:focus {
        outline: none;
    }
    
    &::placeholder {
        color: #FDFDFD;
    }
    
    &:read-only {
        
    }
`;

Input.propTypes = {
    color: PropTypes.string
};

export default Input;