import { ThemeApp } from "@/utils/theme";
import styled from "styled-components";

export const MenuOptions = styled.section`
    width: 28rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    background-color: ${ ThemeApp.colors.secondOpacityColor };
    border-radius: 8px;
    padding: 8px;
    font-family: ${ ThemeApp.fonts.sora };
`;