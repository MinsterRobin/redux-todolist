import {css} from "styled-components";

export const Primary = () => css`
    background-color: ${props => props.theme.primary};
`;

export const Secondary = () => css`
    background-color: ${props => props.theme.secondary};
`;

export const Tertiary = () => css`
    background-color: ${props => props.theme.tertiary};
`;

export const Warning = () => css`
    background-color: ${props => props.theme.warning};
`;
