import { DataTableType } from "@/types";
import { Table } from "../StyledComponents/Table";
import { THeader } from "../StyledComponents/THeader";

const DataTable = (props: DataTableType) => {
    return (
        <Table>
            <thead>
                {props.headers.map((header) => (
                    <THeader>{header}</THeader>
                ))}
            </thead>
            <tbody>
                {props.data.map((e, index) => (
                    <props.element data={e} key={index} />
                ))}
            </tbody>
        </Table>
    );
};

export default DataTable;
