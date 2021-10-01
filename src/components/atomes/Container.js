import styled from "styled-components";
import PropTypes from 'prop-types';
import {Primary, Secondary, Tertiary, Warning} from '../ions/Styles';

const Container = styled.div`
    display: ${props => props.flex && "flex"};
    flex-direction: ${props => props.vertical && "column"};
    justify-content: ${props => props.justify && props.justify};
    align-items: ${props => props.align && props.align};
    padding: ${props => props.padding && props.padding};
    width: 100%;
    height: 100%;
    flex: 1;
    
    ${props => (props.warning && Warning) || (props.primary && Primary) || (props.secondary && Secondary) || (props.tertiary && Tertiary)};
`;

Container.propTypes = {
    flex: PropTypes.bool,
    vertical: PropTypes.bool,
    align: PropTypes.string,
    justify: PropTypes.string,
    padding: PropTypes.string,

    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    tertiary: PropTypes.bool,
    warning: PropTypes.bool
};

export default Container;