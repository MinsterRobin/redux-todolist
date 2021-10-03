import styled from "styled-components";
import PropTypes from 'prop-types';

const ThemeButton = styled.button`
    height: 35px;
    width: 35px;
    cursor: pointer;
    background: linear-gradient(315deg, ${props => props.background} 23.23%, ${props => props.primary} 44.58%, ${props => props.secondary} 63.33%, ${props => props.tertiary} 87.29%);
    border: 4px solid #FFFFFF;
    border-radius: 50%;
    transition: 150ms cubic-bezier(0.68,-0.55,0.27,2.55);
    
    &:hover {
        transform: scale(1.2);
    }
`;

ThemeButton.propTypes = {
    background: PropTypes.string,
    primary: PropTypes.string,
    secondary: PropTypes.string,
    tertiary: PropTypes.string
};

export default ThemeButton;