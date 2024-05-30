import { TData } from "@/components/Base/StyledComponents/TData";
import { ReportShiftType } from "@/types";

function ReportShift({ data }: { data: ReportShiftType }) {
    return (
        <tr>
            <TData>{data.turno}</TData>
            <TData>{data.estado}</TData>
            <TData>{data.tipo}</TData>
            <TData>{data.usuario}</TData>
            <TData>{data.drogueria}</TData>
            <TData>{data.fecha_asignacion}</TData>
            <TData>{data.fecha_finalizacion}</TData>
            <TData>{data.receta_medica}</TData>
            <TData>{data.limite_recetas}</TData>
            <TData>{data.novedades}</TData>
        </tr>
    );
}

export default ReportShift;
