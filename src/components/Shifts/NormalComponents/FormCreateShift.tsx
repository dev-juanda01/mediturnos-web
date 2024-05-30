import {
    FieldFormTheme,
    FormTheme,
    InputTheme,
    LabelTheme,
} from "@/components/Base/StyledComponents/FormTheme";

const FormCreateShift = () => {
    return (
        <FormTheme>
            <FieldFormTheme>
                <LabelTheme>Farmacia</LabelTheme>
                <InputTheme />
            </FieldFormTheme>
            <FieldFormTheme>
                <LabelTheme>Estado</LabelTheme>
                <InputTheme />
            </FieldFormTheme>
            <FieldFormTheme>
                <LabelTheme>Tipo</LabelTheme>
                <InputTheme />
            </FieldFormTheme>
            <FieldFormTheme>
                <LabelTheme>Usuario</LabelTheme>
                <InputTheme />
            </FieldFormTheme>
            <FieldFormTheme>
                <LabelTheme>Codigo receta</LabelTheme>
                <InputTheme />
            </FieldFormTheme>
        </FormTheme>
    );
};

export default FormCreateShift;
