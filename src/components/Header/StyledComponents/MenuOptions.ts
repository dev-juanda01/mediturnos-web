import { ThemeApp } from "@/utils/theme";
import styled from "styled-components";

export const MenuOptions = styled.section`
    width: 25rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    background-color: ${ ThemeApp.colors.secondOpacityColor };
    border-radius: 5px;
    padding: 5px;
`;