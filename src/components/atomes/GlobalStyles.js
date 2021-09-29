import {createGlobalStyle} from "styled-components";
import {COLORS, FONTS} from "../../constants/styles";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }
    
    html {
        --color-text: ${COLORS.text};
        --color-background: ${COLORS.background};
        --color-primary: ${COLORS.primary};
        --color-secondary: ${COLORS.secondary};
        --color-tertiary: ${COLORS.tertiary};
        --color-warning: ${COLORS.warning};
        
        font-size: 62.5%;
        --font-size-very-small: ${FONTS.very_small};
        --font-size-small: ${FONTS.small};
        --font-size-regular: ${FONTS.regular};
        --font-size-medium: ${FONTS.medium};
        --font-size-large: ${FONTS.large};
        --font-size-very-large: ${FONTS.very_large};
        
        --font-family-primary: 'Montserrat', serif; //DEBUG
        --font-family-secondary: 'Playfair Display', serif; //DEBUG
        
        --padding-size: 40px;
        
        background-color: var(--color-background);
        
        @media (max-width: 768px) {
            --padding-size: 20px;
        }
    }
`;

export default GlobalStyles;