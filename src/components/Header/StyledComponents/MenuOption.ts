import { ButtonMenu } from "@/types";
import { ThemeApp } from "@/utils/theme";
import styled from "styled-components";

export const MenuOption = styled.button<ButtonMenu>`
    color: ${(props) =>
        props.current
            ? ThemeApp.colors.primaryColor
            : ThemeApp.colors.secondColor};
    background-color: ${(props) =>
        props.current
            ? ThemeApp.colors.baseColor
            : ThemeApp.colors.secondOpacityColor};
    border-radius: ${(props) => (props.current ? ".5rem" : ".5rem")};
    border: none;
    height: 100%;
    padding: 0 .5rem;
    cursor: pointer;
`;
