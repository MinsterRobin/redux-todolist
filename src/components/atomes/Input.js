import styled from "styled-components";
import PropTypes from 'prop-types';
import {Primary, Secondary, Tertiary, Warning} from '../ions/Styles';

const Input = styled.input`
    width: 100%;
    flex: 1;
    color: var(--color-text);
    font-family: var(--font-family-primary);
    font-size: var(--font-size-large);    
    padding-left: 10px;
    border: none;
        
     ${props => (props.warning && Warning) || (props.primary && Primary) || (props.secondary && Secondary) || (props.tertiary && Tertiary)};
    
    &:focus {
        outline: none;
    }
    
    &::placeholder {
        color: #FDFDFD;
    }
`;

Input.propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    tertiary: PropTypes.bool,
    warning: PropTypes.bool
};

export default Input;