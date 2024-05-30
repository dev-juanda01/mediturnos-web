import DataTable from "@/components/Base/NormalComponents/DataTable";
import ReportShift from "@/components/Reports/NormalComponents/ReportShift";
import { DataTableType, ShiftInterface } from "@/types";
import { headerShiftTable } from "@/utils/contants";
import dayjs from "dayjs";

const ReportView = ({
    historicalShifts,
}: {
    historicalShifts: Array<ShiftInterface>;
}) => {
    const table: DataTableType = {
        data: historicalShifts.map((shift) => ({
            turno: shift.id_turno,
            estado: shift.estado,
            tipo: shift.tipo,
            usuario: shift.usuario.nombre,
            drogueria: shift.drogueria.nombre,
            fecha_asignacion: dayjs(shift.fecha_asignacion).format(
                "DD/MM/YYYY"
            ),
            fecha_finalizacion: dayjs(shift.fecha_finalizacion).format(
                "DD/MM/YYYY"
            ),
            receta_medica: shift.la_receta_medica.codigo,
            limite_recetas: shift.limite_recetas,
            novedades: shift.novedades,
        })),
        headers: headerShiftTable,
        element: ReportShift,
    };

    return (
        <div>
            <p>Reportes</p>
            <DataTable {...table} />
        </div>
    );
};

export default ReportView;
