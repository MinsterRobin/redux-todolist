import {THEMES} from '../../constants/styles';
import ThemeButton from "../atomes/ThemeButton";
import React from "react";
import {useDispatch} from "react-redux";
import {setTheme} from "../../slices/sliceTheme";
import Separator from "../atomes/Separator";
import styled from "styled-components";

const Layout = styled.div`
    display: flex;
    justify-content: center;
`;

const ThemeSelector = () => {
    const dispatch = useDispatch();

    return(
        <Layout>
            {THEMES.map((theme, index) =>
                <React.Fragment>
                    <Separator vertical height={"10px"}/>
                    <ThemeButton
                        onClick={() => dispatch(setTheme(index))}
                        key={index}
                        background={theme.background}
                        primary={theme.primary}
                        secondary={theme.secondary}
                        tertiary={theme.tertiary}
                    />
                </React.Fragment>
            )}
        </Layout>
    );
};

export default ThemeSelector;