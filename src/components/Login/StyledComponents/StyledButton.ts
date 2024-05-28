import { Button } from "reactstrap";
import styled from "styled-components";

export const StyledButton = styled(Button)`
    border-radius: 4px !important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
    transition: all 0.3s ease !important;

    &:focus {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2) !important;
    }
`;
