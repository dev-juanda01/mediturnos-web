import DataTable from "@/components/Base/NormalComponents/DataTable";
import ReportShift from "@/components/Reports/NormalComponents/ReportShift";
import { DataTableType } from "@/types";

const table: DataTableType = {
    data: [
        {
            id: 1,
            name: "Juano",
            last_name: "Alfaro",
            age: 12
        },
        {
            id: 1,
            name: "Juano",
            last_name: "Alfaro",
            age: 12
        },
        {
            id: 1,
            name: "Juano",
            last_name: "Alfaro",
            age: 12
        },
        {
            id: 1,
            name: "Juano",
            last_name: "Alfaro",
            age: 12
        },
    ],
    headers: [ "#", "Nombre", "Apellido", "Edad"  ],
    element: ReportShift
}

const ReportView = () => {
    return <div>
        <p>Reportes</p>
        <DataTable { ...table } />
    </div>;
};

export default ReportView;
