import styled from "styled-components";
import PropTypes from 'prop-types';

const Separator = styled.div`
    height: ${props => props.vertical ? "100%" : props.height === undefined ? "100px" : props.height};
    width: ${props => props.vertical ? props.height : "100%"};
`;

Separator.propTypes = {
    height: PropTypes.string,
    vertical: PropTypes.bool
};

export default Separator;