import styled from "styled-components";
import {useEffect, useState, useRef} from "react";
import PropTypes from 'prop-types';

const ButtonSC = styled.div`
    height: 100%;
    width: ${props => props.height + "px"};
    background-color: ${props => props.color === "" ? "red" : props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
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
        <ButtonSC height={height} color={props.color} ref={buttonRef}>
            <img src={props.icon} alt="Button Icon"/>
        </ButtonSC>
    );
};

Button.propTypes = {
    color: PropTypes.string,
    icon: PropTypes.string
};

export default Button;