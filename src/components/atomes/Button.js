import styled from "styled-components";
import {useEffect, useState, useRef} from "react";
import PropTypes from 'prop-types';
import Primary from "../ions/Primary";
import Secondary from "../ions/Secondary";
import Tertiary from "../ions/Tertiary";

const ButtonSC = styled.button`
    height: 100%;
    width: ${props => props.height + "px"};
    ${props => (props.primary && Primary) || (props.secondary && Secondary) || (props.tertiary && Tertiary)};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    
    &:hover {
        opacity: 0.8;
    }
`;

const Button = (props) => {
    const buttonRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect ( () => {
        if(buttonRef.current){
            const {current} = buttonRef;
            setHeight(current.getBoundingClientRect().height);
        }
    }, [buttonRef]);

    return(
        <ButtonSC {...props} height={height} ref={buttonRef}>
            <img src={props.icon} alt="Button Icon"/>
        </ButtonSC>
    );
};

Button.propTypes = {
    icon: PropTypes.string,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    tertiary: PropTypes.bool,
};

export default Button;