import { GraphicUniqueProp } from "@/types";
import { ThemeApp } from "@/utils/theme";
import styled from "styled-components";

export const GraphicUnique = styled.div<GraphicUniqueProp>`
    border-radius: 10px;
    border: 1px solid ${ ThemeApp.colors.secondOpacityColor };
    padding: 0.5rem;
    width: ${ props => props.width };
    height: ${ props => props.height };
`;