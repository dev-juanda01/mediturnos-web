import { ThemeApp } from "@/utils/theme";
import styled from "styled-components";

export const DateCurrent = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    padding: .5rem;
    border-radius: 10px;
    border: 1px solid ${ ThemeApp.colors.secondOpacityColor };
    height: 2rem;
`;