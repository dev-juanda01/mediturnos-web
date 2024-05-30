import { ModalTheme } from "@/components/Base/StyledComponents/ModalTheme";
import { ThemeApp } from "@/utils/theme";
import FormCreateShift from "./FormCreateShift";

const ModalCreateShift = ({
    handleClickClose,
}: {
    handleClickClose: () => void;
}) => {
    return (
        <ModalTheme>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: `1px solid ${ThemeApp.colors.secondOpacityColor}`
                }}
            >
                <h3>Crear nuevo turno</h3>
                <span style={{ cursor: "pointer" }} onClick={handleClickClose}>
                    X
                </span>
            </div>
            <FormCreateShift />
        </ModalTheme>
    );
};

export default ModalCreateShift;
