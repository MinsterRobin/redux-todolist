import styled from "styled-components";

const H1 = styled.p`
    font-family: var(--font-family-primary);
    font-size: var(--font-size-very-large);
    color: ${props => props.theme.text};
`;

const H2 = styled.p`
    font-family: var(--font-family-primary);
    font-size: var(--font-size-large);
    color: ${props => props.theme.text};    
`;

const H4 = styled.p`
    font-family: var(--font-family-primary);
    font-size: var(--font-size-regular);
    color: ${props => props.theme.text};    
`;

export {H1, H2, H4};