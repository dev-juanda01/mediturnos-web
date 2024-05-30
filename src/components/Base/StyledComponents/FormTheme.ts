import { ThemeApp } from "@/utils/theme";
import styled from "styled-components";

export const FormTheme = styled.form`
    width: 100%;
    padding: 1rem;
`;

export const LabelTheme = styled.label`
    display: block;
    margin: .5rem 0;
`;

export const FieldFormTheme = styled.div`
    width: 100%;
`;

export const InputTheme = styled.input`
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid ${ThemeApp.colors.secondOpacityColor};
`;
