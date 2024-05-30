import { ThemeApp } from "@/utils/theme";
import styled from "styled-components";

export const ButtonTheme = styled.button`
    padding: .5rem 2rem;
    border: none;
    border-radius: 5px;
    margin-bottom: 1rem;
    color: ${ThemeApp.colors.primaryColor};
    background-color: ${ThemeApp.colors.secondOpacityColor};
    cursor: pointer;
`;
