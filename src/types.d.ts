import React from "react";

export type ButtonMenu = {
    current: boolean;
};

export type GraphicUniqueProp = {
    width: string;
    height: string;
};

export type DataTableType = {
    headers: Array<string>;
    data: Array<unknown>;
    element: React.FunctionComponent<{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: any;
    }>;
};

export type ReportShiftType = {
    id: number;
    name: string;
    last_name: string;
    age: number;
};

export interface GlobalContextInterface {
    user: null | string;
    currentPage: string;
    handleCurrentPage: (page: string) => void; // settea el valor del estado de la vista actual
}
